import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Office} from './office.model'
//import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class OfficeService {
formData:Office;
list:Office[];
readonly rooturl="https://localhost:44342/api"
  constructor(private http:HttpClient) {
   }
   postOffice(formData:Office){
    return this.http.post(this.rooturl + '/Offices',formData)
   }
   refreshList(){
    this.http.get(this.rooturl + '/Offices')
    .toPromise().then(res=>this.list=res as Office[]);
  }
  putOffice(formData:Office){
    return this.http.put(this.rooturl + '/Offices/'+ formData.id ,formData)
   }
   deleteOffice(id:number){
     return this.http.delete(this.rooturl + '/Offices/'+ id )
   }
   
    
    

}
