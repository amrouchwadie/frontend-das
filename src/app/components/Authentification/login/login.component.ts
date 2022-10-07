import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;
  constructor(private http: HttpClient,private FormBuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email:'',
      password:''
    });
  }

  submit(): void{
    
    this.http.post('http://localhost:8000/api/login',this.form.getRawValue(),{
      withCredentials:true
    }).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
