import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployees(){

    return this.http.get("https://emp-api-vamsi.herokuapp.com/api/get-employees")
  }

  addEmployee(x:any){
    
    return this.http.post("http://localhost:4000/api/add-employee",x)

  }

 

  deleteEmp(x:any){
    return this.http.delete(`http://localhost:4000/api/delete-employee/${x}`)

  }
}
