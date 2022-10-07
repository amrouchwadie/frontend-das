import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component implements OnInit {

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
