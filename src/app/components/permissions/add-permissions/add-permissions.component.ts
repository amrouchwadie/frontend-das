import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Permission } from 'src/app/permission';
import { Router } from '@angular/router';
import { Emitters } from '../../emitters/emitters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-permissions',
  templateUrl: './add-permissions.component.html',
  styleUrls: ['./add-permissions.component.css']
})
export class AddPermissionsComponent implements OnInit {
  message ='';
  permissions:any;
  permission = new Permission();
  constructor(private dataService:DataService,private router: Router,private http: HttpClient) { }

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
  insertData(){
    this.dataService.insertData(this.permission).subscribe(res => {
      this.getPermissionData();
    });
    this.router.navigate(['permissions']);
    this.getPermissionData();
   // console.log(this.employee);
  }
}
