import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { WalletDto, SignedDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign')
  signup(@Body() dto: WalletDto) {
    return this.authService.sign(dto);
  }

  @Post('verify')
  verify(@Body() dto: SignedDto) {
    return this.authService.verify(dto);
  }
}
