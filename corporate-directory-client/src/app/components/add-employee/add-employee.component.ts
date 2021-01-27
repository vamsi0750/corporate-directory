import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public empForm:NgForm;

  public employeeData :any[] =[];

  constructor(private employeeServiceService :EmployeeServiceService,private router:Router)  { }

  ngOnInit(): void {
  }

  addEmpData(data){
    return this.employeeServiceService.addEmployee(data.value).subscribe(res=>{
      console.log(res)
      this.router.navigate(["/view-employees"])
    }
      
    )
  

  }

  
 

}
