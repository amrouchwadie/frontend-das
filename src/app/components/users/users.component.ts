import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id:any;
  data:any;
  message ='';
  users:any;
  trasheds:any;
  user = new User();
  idd='';
  iddd='';
  constructor(private route:ActivatedRoute,private dataService:DataService,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserData();
    
    this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.idd = `${res.id}`;
        this.iddd = `${res.role_id}`;
      },
      err => {
        if (err) {

          this.idd = 'you are not logged in';
          this.router.navigate(['/login']);
        }
      
      } 
    );
  }
  
  getUserData(){
    this.dataService.allusers().subscribe(res => {
      this.users = res;
    });
    // console.log('Hello Permission');
  }
  deleteUserData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette Paretnir")) {
    this.dataService.deleteUser(id).subscribe(res => {
      this.getUserData();
    });
  //  console.log(id);
  }
  }
  getTrashedData(){
    this.dataService.onlyTrashed().subscribe(res => {
      this.trasheds = res;
    });
    // console.log('Hello Permission');
  }

restoreUser(){
  this.dataService.restoreUser(this.id, this.user).subscribe(res => {
 //   console.log('hello');
  });
}

}
