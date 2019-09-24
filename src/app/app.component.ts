import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private employee: EmployeeService) { }

  title = 'services-demo';
  emp_id;
  emp_name;
  emp_dept;
  
  myEmployee = {
    id : 1,
    name : '',
    dept : ''
  }
  addEmployee(){
    this.myEmployee.id = this.emp_id;
    this.myEmployee.name = this.emp_name;
    this.myEmployee.dept = this.emp_dept;
    this.employee.setEmployee(this.myEmployee)
  }

}
