import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService, SignUpDto } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpDto: SignUpDto = { name: '', email: '', password: '', role: '' };
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.signup(this.signUpDto).subscribe({
      next: () => {
        this.errorMessage = null;
        this.authService.login({ email: this.signUpDto.email, password: this.signUpDto.password }).subscribe();
      },
      error: (err) => {
        this.errorMessage = err.error.message || "Erreur lors de l'inscription";
      },
    });
  }
}