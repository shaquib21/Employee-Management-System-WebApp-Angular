import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService{
    employeeDetail =[
        {  id: "001", name: "Nehal", dept: "CSE" },
        {  id: "002", name: "Saurabh", dept: "CSE" },
        {  id: "003", name: "Burhan", dept: "CSE" },
      ]
      getEmployee() {
          return this.employeeDetail;
      }
      setEmployee(emp){
          this.employeeDetail.push(emp);
      }
}