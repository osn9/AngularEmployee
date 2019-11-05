import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData:Employee;
  list:Employee[];
  readonly rooturl="https://localhost:44342/api"
  constructor(private http:HttpClient) { }

  postEmployee(formData:Employee){
   return this.http.post(this.rooturl + '/Employes',formData)
  }

  refreshList(){
    this.http.get(this.rooturl + '/Employes')
    .toPromise().then(res=>this.list=res as Employee[]);
  }
  putEmployee(formData:Employee){
    return this.http.put(this.rooturl + '/Employes/'+ formData.id ,formData)
   }
   deleteEmploye(id:number){
     return this.http.delete(this.rooturl + '/Employes/'+ id )
   }
 
}
