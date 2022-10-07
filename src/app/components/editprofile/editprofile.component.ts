import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id:any;
  data:any;
  users:any;
  user = new User();
  idd = '';
date=new Date().toISOString().slice(0,10);


  authenticated = false;
  constructor(private http: HttpClient,private route:ActivatedRoute, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
   
        this.idd = `${res.id}`;
        this.date = `${res.created_at.toISOString().slice(0,10)}`;
      },
      err => {
        
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
  updateUsers(){
    this.dataService.updateUsers(this.id, this.user).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['permissions']);
    this.getUserData();
  }
  getUserData(){
    this.dataService.getUser().subscribe(res => {
      this.users = res;
    });
  }

}
