import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService,
    private toastr:ToastrService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData=
    {
 // id:null,
    id:null,
    Name:''
   
    }
     
  }
  onSubmit(form:NgForm)
  {
    if(form.value.id==null)
    this.insertRecord(form)
    else
    this.updateRecord(form)
  }
  insertRecord(form:NgForm){
this.service.postEmployee(form.value).subscribe(res=>{
  this.toastr.success('Inserted','Emp Register')
  this.resetForm();
  this.service.refreshList();
})
  }
  updateRecord(form:NgForm){
    this.service.putEmployee(form.value).subscribe(res=>{
      this.toastr.info('Updated ','Emp Register')
      this.resetForm();
      this.service.refreshList();
    })
      
      }
}
