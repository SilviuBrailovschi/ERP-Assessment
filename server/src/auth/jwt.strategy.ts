import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'supersecret',
    });
  }

  // async validate(payload: any) {
  async validate(payload: any) {
    // This method is called automatically after token is verified
    // You can attach whatever you need to the request object
    return { userId: payload.sub, email: payload.email };
  }
}
