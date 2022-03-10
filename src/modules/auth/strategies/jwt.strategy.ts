import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { secret } from '../consts';

/**
 * JWT authentication strategy.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // Extract token from the auth header.
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }

    async validate(): Promise<boolean> {
        // In this implementation we do nothing if token is valid.
        // Usually here we get user info from DB and assign it to the current
        // request for further usage.

        return true;
    }
}
