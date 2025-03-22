import { Feuilletemp } from './entities/feuilletemp.entity';
import { Repository } from 'typeorm';
export declare class FeuilletempsService {
    private feuilleTempsRepository;
    constructor(feuilleTempsRepository: Repository<Feuilletemp>);
    findAll(): Promise<Feuilletemp[]>;
    findOne(idfeuille: number): Promise<Feuilletemp | null>;
    create(feuilletemps: Feuilletemp): Promise<Feuilletemp>;
    update(idfeuille: number, feuilletemps: Feuilletemp): Promise<void>;
    remove(idfeuille: number): Promise<void>;
}
