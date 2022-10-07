import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/role.model';
import { DataService } from 'src/app/service/data.service';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-editroles',
  templateUrl: './editroles.component.html',
  styleUrls: ['./editroles.component.css']
})
export class EditrolesComponent implements OnInit {

  id:any;
  data:any;
  roles:any;
  role = new Role();
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
    this.dataService.getRoleById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.role = this.data;
    });
  }
  updatePermission(){
    this.dataService.updateRole(this.id, this.role).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['getroles']);
    this.getPermissionData();
  }
  getPermissionData(){
    this.dataService.getData().subscribe(res => {
      this.roles = res;
    });
  }


}
