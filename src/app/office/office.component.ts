import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/shared/office.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(private service:OfficeService,
    private toastr:ToastrService,
    private route: Router,) { }

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
    officeName:'',
   officeAddress:''
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
    this.service.postOffice(form.value).subscribe(res=>{
      this.toastr.success('Inserted','Office Register')
      this.resetForm();
      this.service.refreshList();
      this.route.navigateByUrl('/OfficeList');
    })
      }
      updateRecord(form:NgForm){
        this.service.putOffice(form.value).subscribe(res=>{
          this.toastr.info('Updated ','office Register')
          this.resetForm();
          this.service.refreshList();
        })
          
          }
}
