import { ApiProperty } from '@nestjs/swagger';

export class WalletDto {
  @ApiProperty()
  publicKey: string;
}

export class SignedDto {
  @ApiProperty()
  publicKey: string;
  @ApiProperty()
  signature: string;
}
