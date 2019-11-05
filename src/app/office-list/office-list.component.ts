import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Office } from 'src/app/shared/office.model';
import { OfficeService } from 'src/app/shared/office.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  constructor(
    private service:OfficeService,
    private toastr:ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(off:Office)
  {
    this.service.formData=Object.assign([],off);
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure'))
    {
      
      this.service.deleteOffice(id).subscribe(res=>{
        this.toastr.warning('Deleted ','Emp Register')
        this.service.refreshList();
      });
    }
  }
  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }
}
