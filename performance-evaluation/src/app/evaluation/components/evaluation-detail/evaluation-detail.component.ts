import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../../models/evaluation.model';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation-detail',
  templateUrl: './evaluation-detail.component.html',
  styleUrls: ['./evaluation-detail.component.css']
})
export class EvaluationDetailComponent implements OnInit {
  evaluation?: Evaluation;
  isHR = true; // Mettre à false si l'utilisateur n'est pas RH

  constructor(
    private evaluationService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.evaluationService.getEvaluation(+id).subscribe(
      (data) => this.evaluation = data,
      (error) => console.error('Error fetching evaluation', error)
    );
  }

  editEvaluation(): void {
    this.router.navigate(['/evaluations', this.evaluation?.id, 'edit']);
  }
}