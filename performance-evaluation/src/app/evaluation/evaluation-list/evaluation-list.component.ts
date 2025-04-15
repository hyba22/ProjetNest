// src/app/evaluation/evaluation-list/evaluation-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../evaluation.model';

@Component({
  selector: 'app-evaluation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  stars: number[] = [1, 2, 3, 4, 5];
  ratings: number[] = [5, 4, 3, 2, 1];

  constructor(private readonly evalService: EvaluationService) {}

  ngOnInit(): void {
    this.loadEvaluations();
  }

  loadEvaluations(): void {
    this.evalService.getEvaluations().subscribe({
      next: (data) => {
        this.evaluations = data.map((e) => ({
          ...e,
          date: new Date(e.date)
        }));
      },
      error: (err) => {
        console.error('Error loading evaluations:', err);
      }
    });
  }

  submitEvaluation(): void {
    this.newEvaluation.date = new Date();
    this.evalService.addEvaluation(this.newEvaluation).subscribe({
      next: () => {
        this.loadEvaluations();
        this.resetForm();
      },
      error: (err) => {
        console.error('Error submitting evaluation:', err);
      }
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

  getAverageRating(): number {
    if (this.evaluations.length === 0) return 0;
    const sum = this.evaluations.reduce((acc, e) => acc + e.rating, 0);
    return sum / this.evaluations.length;
  }

  countRatings(rating: number): number {
    return this.evaluations.filter((e) => e.rating === rating).length;
  }

  getRatingPercentage(rating: number): number {
    if (this.evaluations.length === 0) return 0;
    return (this.countRatings(rating) / this.evaluations.length) * 100;
  }

  trackByEvaluation(_index: number, evaluation: Evaluation): number {
    return evaluation.employeeId; // Adjust if employeeId isn't unique
  }

  trackByStar(index: number): number {
    return index;
  }

  trackByRating(index: number): number {
    return index;
  }
}