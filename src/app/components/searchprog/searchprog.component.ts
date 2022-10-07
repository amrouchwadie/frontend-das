import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Programme1 } from 'src/app/programme1.model';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-searchprog',
  templateUrl: './searchprog.component.html',
  styleUrls: ['./searchprog.component.css']
})
export class SearchprogComponent implements OnInit {

progs:any;
data:any;
prog1 = new Programme1();
annee = 2019;
  constructor(private dataService:DataService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getProg1();
    
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
    
    this.http.post('http://localhost:8000/api/addfileimport', formData, {reportProgress: true, observe: 'events'})
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

insertDownload(){
  this.dataService.getDownload(this.prog1).subscribe(res => {
    this.getProg1();
  })
}


  getSearchprogData(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProg(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getAnnProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProgAnn(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getIntituleProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProgIntitule(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getTypeprojetProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProgTypeProjet(keyword).then(res => {
      this.data =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getProg1(){
    this.dataService.getProg1Data().subscribe(res => {
      this.progs = res;
    });
    // console.log('Hello Permission');
  }

  deleteData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette permission")) {
    this.dataService.deleteProg1Data(id).subscribe(res => {
      this.getProg1();
    });
    this.router.navigate(['searchp1']);
    this.getProg1();
  //  console.log(id);
  }
}





}
