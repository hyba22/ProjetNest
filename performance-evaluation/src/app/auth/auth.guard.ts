import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getUserRole();
      const expectedRoles = route.data['roles'] as string[];
      if (userRole && expectedRoles.includes(userRole)) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
}