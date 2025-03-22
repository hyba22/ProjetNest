import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FeuilletempsService } from './feuilletemps.service';
import { Feuilletemp } from './entities/feuilletemp.entity';

@Controller('feuilletemps')
export class FeuilletempsController {
  constructor(private feuilletempsService: FeuilletempsService) {}

@Get() 
async fillAll() {
  const response = await this.feuilletempsService.findAll();
  return response;
}

@Get(":idfeuille")
async findOne(@Param() idfeuille: number) {
  const response = await this.feuilletempsService.findOne(idfeuille);
  return response;
}

@Post('/create')
async create(@Body() CreateFeuilletempDto: Feuilletemp) {
  const response = await this.feuilletempsService.create(CreateFeuilletempDto);
  return response;
}

@Put("/update/:idfeuille")
async update(@Param() idfeuille: number, @Body() CreateFeuilletempDto: Feuilletemp) {
  const response = await this.feuilletempsService.update(idfeuille, CreateFeuilletempDto);
  return response;
}

@Delete("/delete/:idfeuille")
async delete(@Param()@Body() idfeuille: number) {
  const response = await this.feuilletempsService.remove(idfeuille);
  return response;
}
}
