import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from './evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:3001/evaluations'; 

  constructor(private http: HttpClient) {}

  getEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.apiUrl);
  }

  addEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    // Validation simple des données avant envoi
    if (evaluation.rating < 1 || evaluation.rating > 5) {
      throw new Error('La note doit être entre 1 et 5');
    }
    
    return this.http.post<Evaluation>(this.apiUrl, evaluation);
  }

  updateEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    // Validation simple des données avant envoi
    if (evaluation.rating < 1 || evaluation.rating > 5) {
      throw new Error('La note doit être entre 1 et 5');
    }
    if (!evaluation.id) {
      throw new Error('L\'ID de l\'évaluation est requis pour la mise à jour');
    }
    
    return this.http.put<Evaluation>(`${this.apiUrl}/${evaluation.id}`, evaluation);
  }

  deleteEvaluation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}