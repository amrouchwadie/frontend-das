import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-edituse',
  templateUrl: './edituse.component.html',
  styleUrls: ['./edituse.component.css']
})
export class EdituseComponent implements OnInit {

  id:any;
  data:any;
  users:any;
  user = new User();
  role:any
  constructor(private route:ActivatedRoute, private dataService: DataService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.roles()
    this.id = this.route.snapshot.params['id'];
    this.getParteData();
  }

  getParteData(){
    this.dataService.getUserById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.user = this.data;
    });
  }
  updateParte(){
    this.dataService.updateUsers(this.id, this.user).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['users']);
    this.getPartnirData();
  }

  getPartnirData(){
    this.dataService.getUser().subscribe(res => {
      this.users = res;
    });
  }
  roles(){
    this.dataService.getRolesData().subscribe(res=> {
      this.role = res
    })
  }

}
