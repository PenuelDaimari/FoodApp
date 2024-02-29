"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserdetailsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const bcrypt_1 = require("bcrypt");
let UserdetailsRepository = class UserdetailsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Userdetails, dataSource);
    }
    async authenticate(contactNo, password) {
        // Find user by email
        const user = await this.findOne({ where: { contactNo } });
        if (!user) {
            return null; // User not found
        }
        // Verify password
        const passwordMatched = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatched) {
            return null; // Password doesn't match
        }
        return user; // User authenticated
    }
};
exports.UserdetailsRepository = UserdetailsRepository;
exports.UserdetailsRepository = UserdetailsRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Userdetails')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.UserdetailsDataSource])
], UserdetailsRepository);
//# sourceMappingURL=userdetails.repository.js.map