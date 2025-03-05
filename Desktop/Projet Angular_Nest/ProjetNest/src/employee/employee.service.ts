import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOne({ where: { id } });
  }

  create(employee: Employee) {
    return this.employeeRepository.save(employee);
  }

  async update(id: number, updateEmployee: Partial<Employee>) {
    await this.employeeRepository.update(id, updateEmployee);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.employeeRepository.delete(id);
    return { deleted: true };
  }
}
