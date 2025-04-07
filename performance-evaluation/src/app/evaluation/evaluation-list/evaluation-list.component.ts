import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../evaluation.model';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {
  evaluations: Evaluation[] = [];
  newEvaluation: Evaluation = {
    employeeId: 0,
    reviewerId: 0,
    score: 0,
    comments: '',
    date: new Date(),
    rating: 5
  };

  constructor(private evalService: EvaluationService) {}

  ngOnInit(): void {
    this.loadEvaluations();
  }

  loadEvaluations(): void {
    this.evalService.getEvaluations().subscribe(data => {
      this.evaluations = data;
    });
  }

  submitEvaluation(): void {
    this.evalService.addEvaluation(this.newEvaluation).subscribe(() => {
      this.loadEvaluations();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.newEvaluation = {
      employeeId: 0,
      reviewerId: 0,
      score: 0,
      comments: '',
      date: new Date(),
      rating: 5
    };
  }
}