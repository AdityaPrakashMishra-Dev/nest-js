import { Injectable } from '@nestjs/common';
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type NewUser = Omit<User, 'id'>;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            name: 'john',
            email: 'john@example.com',
            password: 'changeme',
        },
        {
            id: 2,
            name: 'maria',
            email: 'maria@example.com',
            password: 'guess',
        },
    ];

    async findOne(name: string): Promise<User | undefined> {
        return this.users.find(user => user.name === name);
    }
    async create(email: string, password: string, name: string): Promise<User> {
        const user = { id: this.users.length + 1, email, password, name };
        this.users.push(user);
        return user;
    }
}
