import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evaluation } from '../evaluation.model';
import { EvaluationService } from '../evaluation.service';

@Component({
  selector: 'app-evaluation-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, DatePipe],
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {
  @Input() isHRMode: boolean = false;
  evaluations: Evaluation[] = [];
  showForm: boolean = false;
  isEditMode: boolean = false;

  private loggedInUserId: number = 1; // Replace with actual user ID from auth service
  private loggedInHRName: string = ''; // Replace with actual HR name from auth service

  newEvaluation: Evaluation = {
    employeeId: this.isHRMode ? 0 : this.loggedInUserId,
    reviewerId: this.isHRMode ? 0 : this.loggedInUserId,
    score: 0,
    comments: '',
    date: new Date(),
    rating: 3,
    hrName: this.isHRMode ? this.loggedInHRName : '' // Pre-fill in HR mode, empty in non-HR mode
  };

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {
    this.loadEvaluations();
    this.resetForm();
  }

  loadEvaluations(): void {
    this.evaluationService.getEvaluations().subscribe({
      next: (evaluations) => {
        this.evaluations = this.isHRMode
          ? evaluations
          : evaluations.filter(e => e.employeeId === this.loggedInUserId);
      },
      error: (err: any) => console.error('Erreur lors du chargement:', err)
    });
  }

  get averageRating(): number {
    if (this.evaluations.length === 0) return 0;
    const sum = this.evaluations.reduce((acc, curr) => acc + curr.rating, 0);
    return sum / this.evaluations.length;
  }

  countRatings(rating: number): number {
    return this.evaluations.filter(e => e.rating === rating).length;
  }

  getRatingPercentage(rating: number): number {
    if (this.evaluations.length === 0) return 0;
    return (this.countRatings(rating) / this.evaluations.length) * 100;
  }

  submitEvaluation(): void {
    this.newEvaluation.date = new Date();
    if (this.isHRMode) {
      this.newEvaluation.hrName = this.loggedInHRName; // Ensure hrName is set in HR mode
    }
    const action = this.isEditMode
      ? this.evaluationService.updateEvaluation(this.newEvaluation)
      : this.evaluationService.addEvaluation(this.newEvaluation);

    action.subscribe({
      next: () => {
        this.loadEvaluations();
        this.resetForm();
        this.showForm = false;
        this.isEditMode = false;
      },
      error: (err: any) => {
        console.error(`Erreur lors de ${this.isEditMode ? 'la modification' : 'l\'ajout'}:`, err);
        alert(err.message);
      }
    });
  }

  editEvaluation(evaluation: Evaluation): void {
    this.newEvaluation = { ...evaluation };
    this.isEditMode = true;
    this.showForm = true;
  }

  deleteEvaluation(id?: number): void {
    if (id && confirm('Voulez-vous vraiment supprimer cette évaluation ?')) {
      this.evaluationService.deleteEvaluation(id).subscribe({
        next: () => this.loadEvaluations(),
        error: (err: any) => console.error('Erreur lors de la suppression:', err)
      });
    }
  }

  resetForm(): void {
    this.newEvaluation = {
      employeeId: this.isHRMode ? 0 : this.loggedInUserId,
      reviewerId: this.isHRMode ? 0 : this.loggedInUserId,
      score: 0,
      comments: '',
      date: new Date(),
      rating: 3,
      hrName: this.isHRMode ? this.loggedInHRName : '' // Reset hrName based on mode
    };
    this.isEditMode = false;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }
}