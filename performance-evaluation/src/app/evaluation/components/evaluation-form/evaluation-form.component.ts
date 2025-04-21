import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../../models/evaluation.model';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css'],
  providers: [DatePipe]
})
export class EvaluationFormComponent implements OnInit {
  evaluationForm: FormGroup;
  isEditMode = false;
  evaluationId?: number;
  reviewerId = 1; // À remplacer par l'ID réel de l'évaluateur

  constructor(
    private fb: FormBuilder,
    private evaluationService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.evaluationForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.min(1)]],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      comments: [''],
      date: [this.datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.evaluationId = +params['id'];
        this.loadEvaluation(this.evaluationId);
      }
    });
  }

  loadEvaluation(id: number): void {
    this.evaluationService.getEvaluation(id).subscribe(
      (evaluation) => {
        this.evaluationForm.patchValue({
          employeeId: evaluation.employeeId,
          score: evaluation.score,
          comments: evaluation.comments,
          date: this.datePipe.transform(evaluation.date, 'yyyy-MM-dd'),
          rating: evaluation.rating
        });
      },
      (error) => console.error('Erreur lors du chargement de l\'évaluation', error)
    );
  }

  onSubmit(): void {
    if (this.evaluationForm.valid) {
      const formValue = this.evaluationForm.value;
      const evaluation: Evaluation = {
        employeeId: formValue.employeeId,
        reviewerId: this.reviewerId,
        score: formValue.score,
        comments: formValue.comments,
        date: new Date(formValue.date),
        rating: formValue.rating
      };

      const operation = this.isEditMode && this.evaluationId
        ? this.evaluationService.updateEvaluation(this.evaluationId, evaluation)
        : this.evaluationService.createEvaluation(evaluation);

      operation.subscribe(
        () => this.router.navigate(['/evaluations']),
        (error) => console.error('Erreur lors de l\'enregistrement', error)
      );
    }
  }
}