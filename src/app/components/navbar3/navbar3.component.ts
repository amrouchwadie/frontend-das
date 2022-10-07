import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Group } from 'src/app/group.model';
import { Role } from 'src/app/role.model';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component implements OnInit {
  groups:any;
  group = new Group();
  idd = '';
  message ='';
  authenticated = false;
data:any

id:any
  currentUser: any;
users:any

  constructor(private http: HttpClient,private dataService:DataService,private route:ActivatedRoute) { }

catid:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.catid = params.get('id')
    })
    this.getuserbyid(this.catid);
    // this.getuserdata()
    this.getGroupnData();
    this.loginData()
    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.message = `${res.name}`;
        this.idd = `${res.role_id}`;
      },
      err => {
        this.message = 'you are not logged in';
      } 
    );



  }
  logout(): void{
    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(()=> this.authenticated = false)
  }

  getGroupnData(){
    this.dataService.getGroupsdata().subscribe(res => {
      this.groups = res;
    });
    // console.log('Hello Permission');
  }



  getuserbyid(id:any){
    this.dataService.getuserByd(id).subscribe((res) => {
      // this.data = res;
    })
  }

 loginData(){
  this.dataService.loginUser(this.currentUser).subscribe(res => {
    this.users = res
  })
 }
  

  


}
