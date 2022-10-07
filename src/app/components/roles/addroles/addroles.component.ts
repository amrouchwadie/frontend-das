import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/role.model';
import { DataService } from 'src/app/service/data.service';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.css']
})
export class AddrolesComponent implements OnInit {

  message ='';
  roles:any;
  role = new Role();
  constructor(private dataService:DataService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getRolesData();
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
  getRolesData(){
    this.dataService.getRolesData().subscribe(res => {
      this.roles = res;
    });
    // console.log('Hello Permission');
  }
  insertData(){
    this.dataService.insertRole(this.role).subscribe(res => {
      this.getRolesData();
    });
    this.router.navigate(['getroles']);
    this.getRolesData();
   // console.log(this.employee);
  }

}
