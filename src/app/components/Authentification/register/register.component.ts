import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Register } from 'src/app/register.model';
import { DataService } from 'src/app/service/data.service';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
role:any
form: FormGroup | any;
  constructor(private http: HttpClient,private FormBuilder:FormBuilder,private router:Router,private dataService:DataService) { 
  
  }

  ngOnInit(): void {
    this.roles()
   this.form = this.FormBuilder.group({
    name:'',
    email:'',
    password:'',
   role_id:''
   });
  }
  submit(): void{
    console.log();
    this.http.post('http://localhost:8000/api/register',this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  roles(){
    this.dataService.getRolesData().subscribe(res=> {
      this.role = res
    })
  }

}
