import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Permission } from 'src/app/permission';
import { Router, RouterEvent } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  message ='';
  permissions:any;
  permission = new Permission();
  constructor(private dataService:DataService,private http: HttpClient,private router:Router) {
}

 
  ngOnInit(): void {
    this.getPermissionData();
    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.message = `Hi ${res.name}`;
        Emitters.outhEmitters.emit(true);
      },
      err => {
        if (err) {

          this.message = 'you are not logged in';
          Emitters.outhEmitters.emit(false);
          this.router.navigate(['/login']);
        }
      
      } 
    );
  }
  getPermissionData(){
    this.dataService.getData().subscribe(res => {
      this.permissions = res;
    });
    // console.log('Hello Permission');
  }
  deleteData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette permission")) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getPermissionData();
    });
  //  console.log(id);
  }
}
  

}
