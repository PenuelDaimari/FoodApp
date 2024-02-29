import { UserService, TokenService } from '@loopback/authentication';
import { Userdetails } from '../models';
import { UserdetailsRepository } from '../repositories';
import { UserProfile } from '@loopback/security';
export declare class MyService implements UserService<Userdetails, Userdetails> {
    private userRepository;
    private tokenService;
    constructor(userRepository: UserdetailsRepository, tokenService: TokenService);
    convertToUserProfile(user: Userdetails): UserProfile;
    generateToken(user: Userdetails): Promise<string>;
    verifyToken(token: string): Promise<Userdetails>;
    verifyCredentials(credentials: Userdetails): Promise<Userdetails>;
}
