import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-searchprog2',
  templateUrl: './searchprog2.component.html',
  styleUrls: ['./searchprog2.component.css']
})
export class Searchprog2Component implements OnInit {

  progs:any;
  data:any;
  
  annee = 2019;
    constructor(private dataService:DataService,private router: Router,private http: HttpClient)
     { }

  ngOnInit(): void {
    this.getProg2()
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
    
    this.http.post('http://localhost:8000/api/addfileimportprog2', formData, {reportProgress: true, observe: 'events'})
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
  getSearchprogData(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg2(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getAnnProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg2Ann(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getIntituleProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg2Intitule(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getTypeprojetProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg2TypeProjet(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

 
  getProg2(){
    this.dataService.getProg2Data().subscribe(res=> {
      this.progs = res;
    })
  }
  deleteData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette permission")) {
    this.dataService.deleteProg2Data(id).subscribe(res => {
      this.getProg2();
    });
    this.router.navigate(['searchp2']);
    this.getProg2();
  //  console.log(id);
  }
}

}
