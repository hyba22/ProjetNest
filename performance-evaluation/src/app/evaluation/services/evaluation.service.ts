// evaluation/services/evaluation.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:3001/evaluations'; // Adaptez selon votre API

  constructor(private http: HttpClient) {}

  getEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.apiUrl);
  }

  getEvaluation(id: number): Observable<Evaluation> {
    return this.http.get<Evaluation>(`${this.apiUrl}/${id}`);
  }

  createEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.post<Evaluation>(this.apiUrl, evaluation);
  }

  updateEvaluation(id: number, evaluation: Evaluation): Observable<Evaluation> {
    return this.http.put<Evaluation>(`${this.apiUrl}/${id}`, evaluation);
  }

  deleteEvaluation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEmployeeEvaluations(employeeId: number): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}?employeeId=${employeeId}`);
  }
}