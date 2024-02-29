"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Token = class Token extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Token = Token;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Token.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Token.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Token.prototype, "Token", void 0);
exports.Token = Token = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Token);
//# sourceMappingURL=token.model.js.map