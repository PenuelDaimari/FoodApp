"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class MyService {
    constructor(userRepository, tokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }
    async generateToken(user) {
        // Generate JWT token for the authenticated user
        const payload = {
            id: user.id, // Include any relevant user data in the payload
        };
        const token = (0, jsonwebtoken_1.sign)(payload, 'your-secret-key', { expiresIn: '1h' }); // Use your own secret key and token expiration
        return token;
    }
    async verifyToken(token) {
        // Implement logic to verify JWT token
        try {
            const decoded = (0, jsonwebtoken_1.verify)(token, 'your-secret-key'); // Use your own secret key
            // Fetch user details based on the decoded token
            const user = await this.userRepository.findById(decoded.id);
            return user;
        }
        catch (error) {
            throw new Error('Invalid token');
        }
    }
    async verifyCredentials(credentials) {
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
exports.MyService = MyService;
//# sourceMappingURL=my-user-services.js.map