import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService, LoginDto } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDto: LoginDto = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.loginDto).subscribe({
      next: () => {
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Erreur lors de la connexion';
      },
    });
  }
}