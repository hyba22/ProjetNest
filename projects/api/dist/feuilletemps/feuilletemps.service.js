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
exports.FeuilletempsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feuilletemp_entity_1 = require("./entities/feuilletemp.entity");
const typeorm_2 = require("typeorm");
let FeuilletempsService = class FeuilletempsService {
    feuilleTempsRepository;
    constructor(feuilleTempsRepository) {
        this.feuilleTempsRepository = feuilleTempsRepository;
    }
    findAll() {
        return this.feuilleTempsRepository.find();
    }
    findOne(idfeuille) {
        return this.feuilleTempsRepository.findOne({ where: { idfeuille } });
    }
    create(feuilletemps) {
        return this.feuilleTempsRepository.save(feuilletemps);
    }
    async update(idfeuille, feuilletemps) {
        await this.feuilleTempsRepository.update(idfeuille, feuilletemps);
    }
    async remove(idfeuille) {
        await this.feuilleTempsRepository.delete(idfeuille);
    }
};
exports.FeuilletempsService = FeuilletempsService;
exports.FeuilletempsService = FeuilletempsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feuilletemp_entity_1.Feuilletemp)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeuilletempsService);
//# sourceMappingURL=feuilletemps.service.js.map