import { Controller, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AuthController {
    constructor(private readonly jwtService: JwtService) {}

    @Get('login')
    async login(): Promise<string> {
        // In this quick implementation we just sign a plain object payload.
        // Usually we should check credentials before it.
        return this.jwtService.signAsync({});
    }
}
