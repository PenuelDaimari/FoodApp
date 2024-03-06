import {repository} from '@loopback/repository';
import {get, post, patch, requestBody, param, HttpErrors} from '@loopback/rest';
import {Userdetails} from '../models';
import {UserdetailsRepository} from '../repositories';
import {hash, compare} from 'bcrypt';
import { sign, Secret, TokenExpiredError, verify } from 'jsonwebtoken';
import {TokenServiceBindings} from '@loopback/authentication-jwt';
import { inject,Context, BindingKey } from '@loopback/core';
import { decode } from 'jsonwebtoken';

function isNumberLength10(input: string): boolean {
  // Check if the input is a number
  if (!/^\d+$/.test(input)) {
      return false;
  }

  // Check if the length of the number is 10
  return input.length === 10;
}
function isPasswordLength8(input: string): boolean {
  // Check if the length of the password is 10
  return input.length >= 8;
}


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

    //check if Contact_number is valid
    if(!isNumberLength10(userDetails.contactNo))
    {
      throw new HttpErrors.BadRequest('invalid contact number');
    }
    if(!isPasswordLength8(userDetails.password))
    {
      throw new HttpErrors.BadRequest('invalid password: password length should be greater than 8 characters');
    }

    // Check if the email is already registered
    const existingUser = await this.UserdetailsRepository.findOne({where: {contactNo: userDetails.contactNo}});
    if (existingUser) {
      throw new HttpErrors.BadRequest('Phone no. already registered');
    }
    //check contactNo for constraints
    

    // Hash the password before storing it
    userDetails.password = await hash(userDetails.password, 10);
    return this.UserdetailsRepository.create(userDetails);
  }

  

  @post('/login')
  async login(
    @requestBody() credentials: {contactNo: string, password: string},
  ): Promise<{token: string}> {

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

    //store token in usermodel
    user.token = token;
    await this.UserdetailsRepository.update(user);
    return { token };
  }
  async getSecret(bindingKey: BindingKey<string>): Promise<string | undefined> {
    const secret = await this.ctx.get(bindingKey);
    if (!secret) {
      throw new Error(`Secret not found for binding key: ${bindingKey.key}`);
    }
    return secret;
  }

  @get('/me')
  async getAllTokens(): Promise<{ token: string, contactNo: string }[]> {
    // Retrieve all user details with contactNo and token
    const allUserDetails: Userdetails[] = await this.UserdetailsRepository.find({ fields: { contactNo: true, token: true } });

    // Filter out valid tokens
    const validTokens: { token: string, contactNo: string }[] = [];
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    for (const Userdetails of allUserDetails) {
      const tokenPayload: any = decode(Userdetails.token!); // Decode token payload

      if (tokenPayload && tokenPayload.exp && tokenPayload.exp > currentTime) {
        // Token has not expired
        validTokens.push({ token: Userdetails.token!, contactNo: Userdetails.contactNo });
      }
    }

    return validTokens;
  }

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

