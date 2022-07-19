import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtEditorStrategy extends PassportStrategy(
  Strategy,
  'jwt-editor',
) {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: string; wallet: string; type: string }) {
    if (
      payload.type === 'editor' ||
      payload.type === 'verified' ||
      payload.type === 'admin'
    ) {
      return payload;
    } else {
      throw new ForbiddenException('Forbidden user type');
    }
  }
}
