import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export interface LoginDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface TokenResponse {
  token: string;
}

export interface JwtPayload {
  id: number;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginDto: LoginDto): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/login`, loginDto).pipe(
      tap((response) => {
        this.setToken(response.token);
        const decoded = jwtDecode<JwtPayload>(response.token);
        this.redirectBasedOnRole(decoded.role);
      })
    );
  }

  signup(signUpDto: SignUpDto): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/signup`, signUpDto);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.role;
    }
    return null;
  }

  private redirectBasedOnRole(role: string): void {
    switch (role) {
      case 'rh':
        this.router.navigate(['/rh']);
        break;
      case 'employes':
        this.router.navigate(['/employee']);
        break;
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}