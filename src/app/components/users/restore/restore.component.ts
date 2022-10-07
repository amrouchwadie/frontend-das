import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {
  id:any;
  data:any;
  message ='';
  users:any;
  trasheds:any;
  user = new User();
  idd='';

  constructor(private route:ActivatedRoute,private dataService:DataService,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();

    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.idd = `${res.id}`;
    
      },
      err => {
        if (err) {

          this.idd = 'you are not logged in';
          this.router.navigate(['/login']);
        }
      
      } 
    );
  }



  getData(){
    this.dataService.getUserById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.user = this.data;
   
    });
  }
  updatePermission(){
    this.dataService.restoreUser(this.id, this.user).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['users']);
    this.getPermissionData();
  }
  getPermissionData(){
    this.dataService.allusers().subscribe(res => {
      this.users = res;
    });
  }


}
