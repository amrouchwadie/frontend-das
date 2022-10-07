import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Permission } from 'src/app/permission';
import { Router,ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Emitters } from '../../emitters/emitters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-permissions',
  templateUrl: './edit-permissions.component.html',
  styleUrls: ['./edit-permissions.component.css']
})
export class EditPermissionsComponent implements OnInit {
  id:any;
  data:any;
  permissions:any;
  permission = new Permission();
  message='';
  constructor(private route:ActivatedRoute, private dataService: DataService,private router: Router,private http:HttpClient) {
   
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.getData();
     
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
  getData(){
    this.dataService.getPermissionById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.permission = this.data;
    });
  }
  updatePermission(){
    this.dataService.updateData(this.id, this.permission).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['permissions']);
    this.getPermissionData();
  }
  getPermissionData(){
    this.dataService.getData().subscribe(res => {
      this.permissions = res;
    });
  }

}
