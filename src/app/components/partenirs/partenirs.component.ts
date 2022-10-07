import { Component, OnInit } from '@angular/core';
import { Partenir } from 'src/app/partenir';
import { Router, RouterEvent } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-partenirs',
  templateUrl: './partenirs.component.html',
  styleUrls: ['./partenirs.component.css']
})
export class PartenirsComponent implements OnInit {
  partenirs:any;
  partenir = new Partenir();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPartenirData();
  }

  getPartenirData(){
    this.dataService.getPartenir().subscribe(res => {
      this.partenirs = res;
    });
    // console.log('Hello Permission');
  }
  
  deletePartnirData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette Paretnir")) {
    this.dataService.deletePartenir(id).subscribe(res => {
      this.getPartenirData();
    });
  //  console.log(id);
  }
}

}
