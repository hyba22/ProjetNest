"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeuilletempsController = void 0;
const common_1 = require("@nestjs/common");
const feuilletemps_service_1 = require("./feuilletemps.service");
const feuilletemp_entity_1 = require("./entities/feuilletemp.entity");
let FeuilletempsController = class FeuilletempsController {
    feuilletempsService;
    constructor(feuilletempsService) {
        this.feuilletempsService = feuilletempsService;
    }
    async fillAll() {
        const response = await this.feuilletempsService.findAll();
        return response;
    }
    async findOne(idfeuille) {
        const response = await this.feuilletempsService.findOne(idfeuille);
        return response;
    }
    async create(CreateFeuilletempDto) {
        const response = await this.feuilletempsService.create(CreateFeuilletempDto);
        return response;
    }
    async update(idfeuille, CreateFeuilletempDto) {
        const response = await this.feuilletempsService.update(idfeuille, CreateFeuilletempDto);
        return response;
    }
    async delete(idfeuille) {
        const response = await this.feuilletempsService.remove(idfeuille);
        return response;
    }
};
exports.FeuilletempsController = FeuilletempsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeuilletempsController.prototype, "fillAll", null);
__decorate([
    (0, common_1.Get)(":idfeuille"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeuilletempsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [feuilletemp_entity_1.Feuilletemp]),
    __metadata("design:returntype", Promise)
], FeuilletempsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/update/:idfeuille"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, feuilletemp_entity_1.Feuilletemp]),
    __metadata("design:returntype", Promise)
], FeuilletempsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete/:idfeuille"),
    __param(0, (0, common_1.Param)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeuilletempsController.prototype, "delete", null);
exports.FeuilletempsController = FeuilletempsController = __decorate([
    (0, common_1.Controller)('feuilletemps'),
    __metadata("design:paramtypes", [feuilletemps_service_1.FeuilletempsService])
], FeuilletempsController);
//# sourceMappingURL=feuilletemps.controller.js.map