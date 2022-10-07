import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-seachprog4',
  templateUrl: './seachprog4.component.html',
  styleUrls: ['./seachprog4.component.css']
})
export class Seachprog4Component implements OnInit {
  progs:any;
  data:any;

  constructor(private dataService:DataService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getProg4();
  }
  progress: number | any;
  message: any;
  @Output() public onUploadFinished = new EventEmitter();
  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('http://localhost:8000/api/addfileimportprog4', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event:any) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload Reussite.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
  deleteData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette permission")) {
    this.dataService.deleteProg4Data(id).subscribe(res => {
      this.getProg4();
    });
    this.router.navigate(['searchp4']);
    this.getProg4();
  //  console.log(id);
  }
}

  getSearchprogData(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg4(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getAnnProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg4Ann(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getIntituleProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg4Intitule(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getTypeprojetProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg4TypeProjet(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

 
  getProg4(){
    this.dataService.getProg4Data().subscribe(res=> {
      this.progs = res;
    })
  }
}
