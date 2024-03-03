"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userdetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Userdetails = class Userdetails extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Userdetails = Userdetails;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Userdetails.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Userdetails.prototype, "contactNo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Userdetails.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Userdetails.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Userdetails.prototype, "username", void 0);
exports.Userdetails = Userdetails = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Userdetails);
//# sourceMappingURL=userdetails.model.js.map