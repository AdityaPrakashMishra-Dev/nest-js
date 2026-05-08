import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async signIn(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (!user || user.password !== password) {
            throw new UnauthorizedException('Invalid credentials');
        }
        // TODO: Generate a JWT and return it here instead of the user object
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(email: string, password: string, name: string): Promise<any> {
        const user = await this.usersService.create(email, password, name);
        return user;
    }
    async signOut(email: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return user;
    }
}
