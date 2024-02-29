"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const core_1 = require("@loopback/core");
let UserController = class UserController {
    constructor(UserdetailsRepository, ctx) {
        this.UserdetailsRepository = UserdetailsRepository;
        this.ctx = ctx;
    }
    async signup(userDetails) {
        // Check if the email is already registered
        const existingUser = await this.UserdetailsRepository.findOne({ where: { email: userDetails.email } });
        if (existingUser) {
            throw new rest_1.HttpErrors.BadRequest('Email already registered');
        }
        // Hash the password before storing it
        userDetails.password = await (0, bcrypt_1.hash)(userDetails.password, 10);
        return this.UserdetailsRepository.create(userDetails);
    }
    async login(credentials) {
        //find existing session and return binding key
        // const storedToken = localStorage.getItem(credentials.email);
        // if(storedToken) {
        //   return{ token: storedToken};
        // }
        //if session does not exist then
        // Find user by email
        const user = await this.UserdetailsRepository.findOne({ where: { email: credentials.email } });
        if (!user) {
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        }
        // Verify password
        const passwordMatched = await (0, bcrypt_1.compare)(credentials.password, user.password);
        if (!passwordMatched) {
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        }
        // Generate JWT token or return some other authentication token
        const tokenSecret = await this.getSecret(authentication_jwt_1.TokenServiceBindings.TOKEN_SECRET); // Retrieve the secret value
        const token = (0, jsonwebtoken_1.sign)({ userId: user.id }, tokenSecret, { expiresIn: '.5h' }); // Generate token here
        return { token };
    }
    async getSecret(bindingKey) {
        const secret = await this.ctx.get(bindingKey);
        if (!secret) {
            throw new Error(`Secret not found for binding key: ${bindingKey.key}`);
        }
        return secret;
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, rest_1.post)('/signup'),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Userdetails]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
tslib_1.__decorate([
    (0, rest_1.post)('/login'),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserdetailsRepository)),
    tslib_1.__param(1, core_1.inject.context()),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserdetailsRepository,
        core_1.Context])
], UserController);
//# sourceMappingURL=user.controller.js.map