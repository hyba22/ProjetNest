import { FeuilletempsService } from './feuilletemps.service';
import { Feuilletemp } from './entities/feuilletemp.entity';
export declare class FeuilletempsController {
    private feuilletempsService;
    constructor(feuilletempsService: FeuilletempsService);
    fillAll(): Promise<Feuilletemp[]>;
    findOne(idfeuille: number): Promise<Feuilletemp | null>;
    create(CreateFeuilletempDto: Feuilletemp): Promise<Feuilletemp>;
    update(idfeuille: number, CreateFeuilletempDto: Feuilletemp): Promise<void>;
    delete(idfeuille: number): Promise<void>;
}
