import { EmployeeServiceService } from './../../services/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  public listOfEmployees : any = [];

  constructor(private employeeServiceService :EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeServiceService.getEmployees().subscribe((res)=>{
      this.listOfEmployees = res,
      console.log(this.listOfEmployees)
    })
  }

}
