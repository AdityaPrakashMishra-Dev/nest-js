import { Controller, Post, Body, HttpCode, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(200)
    @Post('login')
    async login(@Body() body: LoginDto) {
        return this.authService.signIn(body.email, body.password);
    }

    @HttpCode(201)
    @Post('register')
    async register(@Body() body: RegisterDto) {
        return this.authService.signUp(body.email, body.password, body.name);
    }


}
