"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodDatasourceDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'FoodDatasource',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017/FoodApp',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let FoodDatasourceDataSource = class FoodDatasourceDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.FoodDatasourceDataSource = FoodDatasourceDataSource;
FoodDatasourceDataSource.dataSourceName = 'FoodDatasource';
FoodDatasourceDataSource.defaultConfig = config;
exports.FoodDatasourceDataSource = FoodDatasourceDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.FoodDatasource', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], FoodDatasourceDataSource);
//# sourceMappingURL=food-datasource.datasource.js.map