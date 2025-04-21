import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../../models/evaluation.model';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {
  evaluations: Evaluation[] = [];
  isHR = true; // Mettre à false si l'utilisateur n'est pas RH
  currentUserId = 1; // Remplacer par l'ID réel de l'utilisateur

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {
    if (this.isHR) {
      this.loadAllEvaluations();
    } else {
      this.loadEmployeeEvaluations(this.currentUserId);
    }
  }

  loadAllEvaluations(): void {
    this.evaluationService.getEvaluations().subscribe(
      (data) => this.evaluations = data,
      (error) => console.error('Error fetching evaluations', error)
    );
  }

  loadEmployeeEvaluations(employeeId: number): void {
    this.evaluationService.getEmployeeEvaluations(employeeId).subscribe(
      (data) => this.evaluations = data,
      (error) => console.error('Error fetching employee evaluations', error)
    );
  }

  deleteEvaluation(id: number): void {
    if (confirm('Are you sure you want to delete this evaluation?')) {
      this.evaluationService.deleteEvaluation(id).subscribe(
        () => this.evaluations = this.evaluations.filter(e => e.id !== id),
        (error) => console.error('Error deleting evaluation', error)
      );
    }
  }
}