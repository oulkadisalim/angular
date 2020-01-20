import { EmployeeService } from './../employee.service';
import { Employee } from './../etudiant';
import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms';
import {FormsModule}from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './etud-etudiant.component.html',
  styleUrls: ['./etud-etudiant.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit(f:NgForm) {
this.employee.firstName=f.value['firstName'];
this.employee.lastName=f.value['lastName'];
this.employee.emailId=(f.value['emailId'] );
this.employee. active=(f.value[' active'] ==='true');

       console.log(this.employee);
    this.submitted = true;
    this.save();
  }
}
