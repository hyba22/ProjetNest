import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { Evaluation } from './evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  // Créer une évaluation
  async create(createEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    const evaluation = this.evaluationRepository.create(createEvaluationDto); // Crée une instance en mémoire
    return this.evaluationRepository.save(evaluation); // Sauvegarde l'entité dans la base de données
  }

  // Récupérer toutes les évaluations
  async findAll(): Promise<Evaluation[]> {
    return this.evaluationRepository.find();
  }

  // Récupérer une évaluation par ID
  async findOne(id: number): Promise<Evaluation> {
    const evaluation = await this.evaluationRepository.findOne({ where: { id } }); // Utilisation de `where` pour spécifier l'ID
    if (!evaluation) {
      throw new NotFoundException(`Évaluation avec l'ID ${id} non trouvée`);
    }
    return evaluation;
  }

  // Mettre à jour une évaluation par ID
  async update(id: number, updateEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    const evaluation = await this.evaluationRepository.findOne({ where: { id } }); // Utilisation de `where` pour spécifier l'ID
    if (!evaluation) {
      throw new NotFoundException(`Évaluation avec l'ID ${id} non trouvée`);
    }

    // Mettre à jour les propriétés de l'évaluation avec les données du DTO
    Object.assign(evaluation, updateEvaluationDto);

    // Sauvegarder l'évaluation mise à jour dans la base de données
    return this.evaluationRepository.save(evaluation);
  }

  // Supprimer une évaluation par ID
  async remove(id: number): Promise<void> {
    const evaluation = await this.evaluationRepository.findOne({ where: { id } }); // Utilisation de `where` pour spécifier l'ID
    if (!evaluation) {
      throw new NotFoundException(`Évaluation avec l'ID ${id} non trouvée`);
    }

    await this.evaluationRepository.remove(evaluation); // Supprimer l'évaluation
  }
}
