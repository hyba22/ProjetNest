// Corrigez app.routes.ts
import { Routes } from '@angular/router';
import { EvaluationListComponent } from './evaluation/evaluation-list/evaluation-list.component';

export const routes: Routes = [
  { path: 'evaluation-list', component: EvaluationListComponent },
  { path: '', redirectTo: '/evaluation-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/evaluation-list' }
];