import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';
export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name: string;
}