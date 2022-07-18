// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');
import Web3Types from 'web3';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { SignedDto, WalletDto } from './dto';

@Injectable()
export class AuthService {
  private web3: Web3Types;
  private generateNonce(): number {
    return Math.floor(Math.random() * 10 ** 18);
  }
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {
    this.web3 = new Web3(config.get('WEB3_PROVIDER'));
  }
  async sign(dto: WalletDto) {
    if (this.web3.utils.isAddress(dto.publicKey)) {
      let user = await this.prisma.user.findUnique({
        where: {
          wallet: dto.publicKey,
        },
      });
      if (!user) {
        user = await this.prisma.user.create({
          data: {
            wallet: dto.publicKey,
            nonce: this.generateNonce(),
            type:
              (await this.web3.eth.getBalance(dto.publicKey)) >=
              this.config.get('EDITOR_BALANCE')
                ? 'editor'
                : 'user',
          },
        });
      }
      return user.nonce;
    } else {
      throw new ForbiddenException('Invalid address');
    }
  }
  async verify(dto: SignedDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        wallet: dto.publicKey,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid address');
    }
    const msg = `I am signing my one-time nonce for ${this.config.get(
      'WEBSITE_ADDRESS',
    )}: ${user.nonce}`;
    try {
      const recoveredPublicKey = this.web3.eth.accounts.recover(
        msg,
        dto.signature,
      );
      if (recoveredPublicKey === dto.publicKey) {
        await this.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            nonce: this.generateNonce(),
          },
        });
        return { access_token: await this.signToken(user.id, user.wallet) };
      } else {
        throw new ForbiddenException('Invalid signature');
      }
    } catch (e) {
      throw new ForbiddenException('Invalid signature');
    }
  }
  signToken(id: string, wallet: string): Promise<string> {
    const payload = {
      sub: id,
      wallet,
    };
    const secret = this.config.get('JWT_SECRET');
    return this.jwt.signAsync(payload, {
      expiresIn: this.config.get('JWT_EXPIRATION'),
      secret,
    });
  }
}
