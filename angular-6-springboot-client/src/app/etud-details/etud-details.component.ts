import { Employee } from './../etudiant';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../etud-list/etud-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './etud-details.component.html',
  styleUrls: ['./etud-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService, private listComponent: EmployeeListComponent) { }

  ngOnInit() {
  }

}
