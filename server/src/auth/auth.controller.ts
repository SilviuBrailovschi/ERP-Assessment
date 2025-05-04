import { Controller, Post, Body } from '@nestjs/common';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { LoginSchema, LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body(new ZodValidationPipe(LoginSchema)) dto: LoginDto,
  ) {
    const { access_token, user } = await this.authService.login(dto);
    return {
      access_token,
      message: `Hello ${user.name}!`,
    };
  }
}
