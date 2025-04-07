import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { Evaluation } from './evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';  // DTO pour la création

@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  // Route POST pour créer une évaluation
  @Post()
  async create(@Body() createEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    return this.evaluationService.create(createEvaluationDto);
  }

  // Route GET pour récupérer toutes les évaluations
  @Get()
  async findAll(): Promise<Evaluation[]> {
    return this.evaluationService.findAll();
  }

  // Route GET pour récupérer une évaluation par ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Evaluation> {
    return this.evaluationService.findOne(+id);
  }

  // Route PUT pour mettre à jour une évaluation par ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    return this.evaluationService.update(+id, updateEvaluationDto);
  }

  // Route DELETE pour supprimer une évaluation par ID
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.evaluationService.remove(+id);
  }
}
