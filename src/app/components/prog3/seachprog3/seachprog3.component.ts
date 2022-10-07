import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-seachprog3',
  templateUrl: './seachprog3.component.html',
  styleUrls: ['./seachprog3.component.css']
})
export class Seachprog3Component implements OnInit {

  progs:any;
  data:any;

  constructor(private dataService:DataService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getProg3();
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
    
    this.http.post('http://localhost:8000/api/addfileimportprog3', formData, {reportProgress: true, observe: 'events'})
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
    this.dataService.deleteProg3Data(id).subscribe(res => {
      this.getProg3();
    });
    this.router.navigate(['searchp1']);
    this.getProg3();
  //  console.log(id);
  }
}

  
  getSearchprogData(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg3(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getAnnProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg3Ann(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getIntituleProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg3Intitule(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getTypeprojetProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg3TypeProjet(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

 
  getProg3(){
    this.dataService.getProg3Data().subscribe(res=> {
      this.progs = res;
    })
  }


}
