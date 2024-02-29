import { UserService, TokenService } from '@loopback/authentication';
import { Userdetails } from '../models';
import { UserdetailsRepository } from '../repositories';
export declare class MyService implements UserService<Userdetails, Userdetails> {
    private userRepository;
    private tokenService;
    constructor(userRepository: UserdetailsRepository, tokenService: TokenService);
    generateToken(user: Userdetails): Promise<string>;
    verifyToken(token: string): Promise<Userdetails>;
    verifyCredentials(credentials: Userdetails): Promise<Userdetails>;
}
