import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-displaydossier',
  templateUrl: './displaydossier.component.html',
  styleUrls: ['./displaydossier.component.css']
})
export class DisplaydossierComponent implements OnInit {

  constructor(private dataService:DataService) { }
  files:any
  ngOnInit(): void {
    this.getdossierdata()
  }

  getdossierdata(){
    this.dataService.getfileData().subscribe(res => {
      this.files = res
    })
  }

}
