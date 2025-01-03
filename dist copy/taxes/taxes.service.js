"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const tax_entity_1 = require("./entities/tax.entity");
const taxes_json_1 = __importDefault(require("../db/pickbazar/taxes.json"));
const taxes = (0, class_transformer_1.plainToClass)(tax_entity_1.Tax, taxes_json_1.default);
let TaxesService = class TaxesService {
    constructor() {
        this.taxes = taxes;
    }
    create(createTaxDto) {
        return this.taxes[0];
    }
    findAll() {
        return this.taxes;
    }
    findOne(id) {
        return this.taxes.find((tax) => tax.id === Number(id));
    }
    update(id, updateTaxDto) {
        return this.taxes[0];
    }
    remove(id) {
        return `This action removes a #${id} tax`;
    }
};
TaxesService = __decorate([
    (0, common_1.Injectable)()
], TaxesService);
exports.TaxesService = TaxesService;
//# sourceMappingURL=taxes.service.js.map