import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RhComponent } from './dashboards/rh/rh.component';
import { EmployeeComponent } from './dashboards/employee/employee.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'rh', component: RhComponent/* ,canActivate: [AuthGuard], data: { roles: ['rh'] } */},
    { path: 'employee', component: EmployeeComponent/*, canActivate: [AuthGuard], data: { roles: ['employes'] } */},
    { path: 'admin', component: AdminComponent,/* canActivate: [AuthGuard], data: { roles: ['admin'] }*/ },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
   
  ];