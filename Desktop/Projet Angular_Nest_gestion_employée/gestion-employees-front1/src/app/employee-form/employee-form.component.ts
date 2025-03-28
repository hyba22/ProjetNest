import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { name: '', email: '', position: '' };
  isEditMode = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.employeeService.getEmployee(+id).subscribe((data) => {
        this.employee = data;
      });
    }
  }

  saveEmployee(): void {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee.id!, this.employee).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/employee-list']);
  }
}