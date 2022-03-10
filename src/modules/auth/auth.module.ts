import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { expiresIn, secret } from './consts';

/**
 * Authentication module.
 */
@Module({
    imports: [
        PassportModule,
        // Register module to work with JWT tokens.
        JwtModule.register({
            secret,
            signOptions: {
                expiresIn: `${expiresIn}s`,
            },
        }),
    ],
    providers: [JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
