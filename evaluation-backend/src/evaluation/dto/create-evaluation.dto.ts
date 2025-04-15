import { IsDate, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateEvaluationDto {
  @IsInt()
  employeeId: number; // L'ID de l'employé évalué

  @IsInt()
  reviewerId: number; // L'ID du responsable RH qui évalue

  @IsInt()
  @Min(0)
  @Max(100)
  score: number; // Note attribuée (ex: sur 100)

  @IsString()
  @IsOptional()
  comments?: string; // Commentaire sur la performance

  @IsDate()
  date: Date; // Date de l'évaluation

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number; // Note en étoiles (1 à 5)
}
