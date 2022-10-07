import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Filedoc } from 'src/app/filedoc.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-docfile',
  templateUrl: './docfile.component.html',
  styleUrls: ['./docfile.component.css']
})
export class DocfileComponent implements OnInit {
title = 'file upload';
files:any

filedata:any
form:FormGroup | any
  constructor(private dataService:DataService,private http:HttpClient,public fb:FormBuilder,private router: Router) { 
    this.form = this.fb.group({
      name:null,
      file:null,
      file_id:null
    })
  }

  ngOnInit(): void {
    this.getfilesData();
  }

  uploadFile(event:Event){
    const fichier = (event.target as HTMLInputElement)?.files?.[0];
    this.form.patchValue({
      file:fichier,
      name:null,
      file_id:null
    })
  }

  submitForm(){
    const formData:any = new FormData();
    formData.append("name",this.form.controls['name'].value);
    formData.append("file",this.form.controls['file'].value);
    formData.append("file_id",this.form.controls['file_id'].value);
    const httpOptions = {
      filedoc :new Filedoc(),
      headers: new HttpHeaders({
        'Accept':'application/json'
        
      })
    };
    this.http.post('http://127.0.0.1:8000/api/addFiledocs',formData,httpOptions).subscribe({
      next: (v)=> console.log('success',v),
      error: (e)=> console.error('error',e),
      complete: ()=> console.info('complete')
    });
    
  }

  
  getfilesData(){
    this.dataService.getfileData().subscribe(res => {
      this.files = res
    })
  }

}
