"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FoodControllerController = class FoodControllerController {
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    async create(food) {
        return this.foodRepository.create(food);
    }
    async count(where) {
        return this.foodRepository.count(where);
    }
    async find(filter) {
        return this.foodRepository.find(filter);
    }
    async updateAll(food, where) {
        return this.foodRepository.updateAll(food, where);
    }
    async findById(id, filter) {
        return this.foodRepository.findById(id, filter);
    }
    async updateById(id, food) {
        await this.foodRepository.updateById(id, food);
    }
    async replaceById(id, food) {
        await this.foodRepository.replaceById(id, food);
    }
    async deleteById(id) {
        await this.foodRepository.deleteById(id);
    }
};
exports.FoodControllerController = FoodControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/foods'),
    (0, rest_1.response)(200, {
        description: 'Food model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Food) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Food, {
                    title: 'NewFood',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Food]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/foods/count'),
    (0, rest_1.response)(200, {
        description: 'Food model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Food)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/foods'),
    (0, rest_1.response)(200, {
        description: 'Array of Food model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Food, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Food)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/foods'),
    (0, rest_1.response)(200, {
        description: 'Food PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Food, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Food)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Food, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/foods/{id}'),
    (0, rest_1.response)(200, {
        description: 'Food model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Food, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Food, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/foods/{id}'),
    (0, rest_1.response)(204, {
        description: 'Food PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Food, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Food]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/foods/{id}'),
    (0, rest_1.response)(204, {
        description: 'Food PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Food]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/foods/{id}'),
    (0, rest_1.response)(204, {
        description: 'Food DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodControllerController.prototype, "deleteById", null);
exports.FoodControllerController = FoodControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FoodRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FoodRepository])
], FoodControllerController);
//# sourceMappingURL=food-controller.controller.js.map