import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
message ='';
idd = ''
  constructor(private http: HttpClient,private router:Router) { }
 
  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.message = `Hi ${res.name}`;
        this.idd=`${res.name}`;
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


}
