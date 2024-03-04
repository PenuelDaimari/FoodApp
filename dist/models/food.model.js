"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Food = class Food extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Food = Food;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Food.prototype, "foodID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Food.prototype, "Name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Food.prototype, "Hall", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Food.prototype, "Price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Food.prototype, "Description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Food.prototype, "image", void 0);
exports.Food = Food = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Food);
//# sourceMappingURL=food.model.js.map