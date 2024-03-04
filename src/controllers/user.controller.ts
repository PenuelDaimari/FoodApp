import {repository} from '@loopback/repository';
import {get, post, patch, requestBody, param, HttpErrors} from '@loopback/rest';
import {Userdetails} from '../models';
import {UserdetailsRepository} from '../repositories';
import {hash, compare} from 'bcrypt';
import { sign, Secret } from 'jsonwebtoken';
import {TokenServiceBindings} from '@loopback/authentication-jwt';
import { inject,Context, BindingKey } from '@loopback/core';

export class UserController {
  constructor(
    @repository(UserdetailsRepository)
    public UserdetailsRepository: UserdetailsRepository,
    @inject.context() private ctx: Context
  ) {}

  @post('/signup')
  async signup(
    @requestBody() userDetails: Userdetails,
  ): Promise<Userdetails> {
    // Check if the email is already registered
    const existingUser = await this.UserdetailsRepository.findOne({where: {contactNo: userDetails.contactNo}});
    if (existingUser) {
      throw new HttpErrors.BadRequest('Email already registered');
    }
    // Hash the password before storing it
    userDetails.password = await hash(userDetails.password, 10);
    return this.UserdetailsRepository.create(userDetails);
  }

  @post('/login')
  async login(
    @requestBody() credentials: {contactNo: string, password: string},
  ): Promise<{token: string}> {

    //find existing session and return binding key

    // const storedToken = localStorage.getItem(credentials.email);
    // if(storedToken) {
    //   return{ token: storedToken};
    // }

    //if session does not exist then
    // Find user by contactNo
    const user = await this.UserdetailsRepository.findOne({where: {contactNo: credentials.contactNo}});
    if (!user) {
      throw new HttpErrors.Unauthorized('Invalid credentials');
    }
    // Verify password
    const passwordMatched = await compare(credentials.password, user.password);
    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('Invalid credentials');
    }
    // Generate JWT token or return some other authentication token

    const tokenSecret = await this.getSecret(TokenServiceBindings.TOKEN_SECRET); // Retrieve the secret value
    const token = sign({ userId: user.id }, tokenSecret as Secret, { expiresIn: '.5h' }); // Generate token here
    return { token };
  }
  async getSecret(bindingKey: BindingKey<string>): Promise<string | undefined> {
    const secret = await this.ctx.get(bindingKey);
    if (!secret) {
      throw new Error(`Secret not found for binding key: ${bindingKey.key}`);
    }
    return secret;
  }

  // @get('/me')

  // @patch('/updateByEmail/{email}')
  // async updateByEmail(
  //   @param.path.string('email') email: string,
  //   @requestBody() updates: Partial<Userdetails>,
  // ): Promise<Userdetails> {
  //   // Find user by email
  //   const user = await this.UserdetailsRepository.findOne({where: {email}});
  //   if (!user) {
  //     throw new HttpErrors.NotFound('User not found');
  //   }
  //   // Update user details
  //   await this.UserdetailsRepository.updateById(email, updates);
  //   return this.UserdetailsRepository.findById(email);
  // }

  // @get('/byName/{name}')
  // async getByname(
  //   @param.path.string('name') name: string,
  // ): Promise<Userdetails[]> {
  //   // Find users by name
  //   return this.UserdetailsRepository.find({where: {name}});
  // }

  // @get('/byEmail/{email}')
  // async getByEmail(
  //   @param.path.string('email') email: string,
  // ): Promise<Userdetails> {
  //   // Find user by email
  //   const user = await this.UserdetailsRepository.findOne({where: {email}});
  //   if (!user) {
  //     throw new HttpErrors.NotFound('User not found');
  //   }
  //   return user;
  // }

  // @get('/count')
  // async count(): Promise<any> {
  //   // Count total number of users
  //   return this.UserdetailsRepository.count();
  // }
}

