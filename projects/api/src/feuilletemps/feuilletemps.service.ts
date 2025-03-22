import { Injectable } from '@nestjs/common';
import { CreateFeuilletempDto } from './dto/create-feuilletemp.dto';
import { UpdateFeuilletempDto } from './dto/update-feuilletemp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feuilletemp } from './entities/feuilletemp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeuilletempsService {
  constructor(
    @InjectRepository(Feuilletemp)
    private feuilleTempsRepository: Repository<Feuilletemp>,
  ){}
findAll(): Promise<Feuilletemp[]>{
  return this.feuilleTempsRepository.find();
}

findOne(idfeuille: number): Promise<Feuilletemp | null> {
  return this.feuilleTempsRepository.findOne({ where: { idfeuille } });
}

create(feuilletemps: Feuilletemp): Promise<Feuilletemp>{
  return this.feuilleTempsRepository.save(feuilletemps);
}

async update(idfeuille: number, feuilletemps: Feuilletemp) {
  await this.feuilleTempsRepository.update(idfeuille, feuilletemps);
}

async remove(idfeuille: number): Promise<void>{
  await this.feuilleTempsRepository.delete(idfeuille);
}
}
