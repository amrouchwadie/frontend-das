import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from 'src/app/file.model';
import { DataService } from 'src/app/service/data.service';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayfile',
  templateUrl: './displayfile.component.html',
  styleUrls: ['./displayfile.component.css']
})
export class DisplayfileComponent implements OnInit {
  
file = new File();
files:any;
id:any;
data:any;

  constructor(private dataService:DataService,private route:ActivatedRoute,private http:HttpClient) { }
catid:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.catid = params.get('id')
    })
    this.getfilebyid(this.catid);
    this.getfiles()

  }

  getfiles(){
    this.dataService.getfiledocData().subscribe(res => {
      this.files = res
    })
  }

  getfilebyid(id:any){
    this.dataService.getfiledocsById(id).subscribe((res) => {
      this.data = res;
    })
  }

  getfilebd(id:any){
    this.dataService.getfiledocsById(id).subscribe((res => this.downloadFile(this.data.file)) )
  }

  downloadFile(data: Response) {
    const blob = new Blob([this.data], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }



}
