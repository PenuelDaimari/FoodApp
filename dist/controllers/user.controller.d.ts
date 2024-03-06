import { Userdetails } from '../models';
import { UserdetailsRepository } from '../repositories';
import { Context, BindingKey } from '@loopback/core';
export declare class UserController {
    UserdetailsRepository: UserdetailsRepository;
    private ctx;
    constructor(UserdetailsRepository: UserdetailsRepository, ctx: Context);
    signup(userDetails: Userdetails): Promise<Userdetails>;
    login(credentials: {
        contactNo: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    getSecret(bindingKey: BindingKey<string>): Promise<string | undefined>;
    getAllTokens(): Promise<{
        token: string;
        contactNo: string;
    }[]>;
}
