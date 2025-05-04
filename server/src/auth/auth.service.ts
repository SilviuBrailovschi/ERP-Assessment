import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // Validate the credentials, return user object (without password) or throw
  async validateUser(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const pwMatches = await bcrypt.compare(dto.password, user.password);
    if (!pwMatches) throw new UnauthorizedException('Invalid credentials');


    const { password, ...safeUser } = user;
    return safeUser;  // { id, email, name }
  }

  // Sign a JWT and return both token and user info
  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
