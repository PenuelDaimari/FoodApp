import {UserService, TokenService} from '@loopback/authentication';
import {Userdetails} from '../models';
import {UserdetailsRepository} from '../repositories';
import {sign, verify} from 'jsonwebtoken';
import {inject} from '@loopback/core';
import { UserProfile } from '@loopback/security';

export class MyService implements UserService<Userdetails, Userdetails> {
  constructor(
    private userRepository: UserdetailsRepository,
    private tokenService: TokenService,
  ) {}
  convertToUserProfile(user: Userdetails): UserProfile {
    throw new Error('Method not implemented.');
  }


  async generateToken(user: Userdetails): Promise<string> {
    // Generate JWT token for the authenticated user
    const payload = {
      id: user.id, // Include any relevant user data in the payload
    };
    const token = sign(payload, 'your-secret-key', {expiresIn: '1h'}); // Use your own secret key and token expiration
    return token;
  }

  async verifyToken(token: string): Promise<Userdetails> {
    // Implement logic to verify JWT token
    try {
      const decoded = verify(token, 'your-secret-key') as {id: string}; // Use your own secret key
      // Fetch user details based on the decoded token
      const user = await this.userRepository.findById(decoded.id);
      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }


  async verifyCredentials(credentials:Userdetails): Promise<Userdetails> {
    // Verify user credentials (e.g., email and password)
    const user = await this.userRepository.findOne({
      where: {
        contactNo: credentials.contactNo,
        password: credentials.password,
      },
    });

  if (!user) {
    // If user is not found or credentials are invalid, throw an error
    throw new Error('Invalid credentials');
  }

  // Return the user if credentials are valid
  return user;
  }
}
