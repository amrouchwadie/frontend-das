import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Group } from 'src/app/group.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Permission } from 'src/app/permission';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


 

  idd = '';
  message ='';
  authenticated = false;
  constructor(private http: HttpClient,private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  
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

  

}
