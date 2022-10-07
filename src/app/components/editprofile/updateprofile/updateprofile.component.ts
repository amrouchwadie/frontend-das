import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  id:any;
  data:any;
  users:any;
  userss = new User();
  idd ='';
  constructor(private http: HttpClient,private route:ActivatedRoute, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUsData();
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

  getUsData(){
    this.dataService.getUserById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.userss = this.data;
    });
  }
  updateUser(){
    this.dataService.updateUsers(this.id, this.userss).subscribe(res => {
   //   console.log('hello');
   this.router.navigate(['editprofile',this.id]);
   
    });

  }

  getUserData(){
    this.dataService.getUserById(this.id).subscribe(res => {
      this.users = res;
    });
  }

  deleteUsers(id: any){
    if(confirm("Vous etes sur que vous voulez desactivé votre compte")) {
    this.dataService.deleteUser(id).subscribe(res => {
      this.router.navigate(['/login']);
    });
  //  console.log(id);
  }
}

}
