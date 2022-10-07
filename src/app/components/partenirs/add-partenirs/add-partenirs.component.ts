import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Partenir } from 'src/app/partenir';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-partenirs',
  templateUrl: './add-partenirs.component.html',
  styleUrls: ['./add-partenirs.component.css']
})
export class AddPartenirsComponent implements OnInit {
  partenirs:any;
  partenir = new Partenir();
  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.getPartenirData();
  }
  getPartenirData(){
    this.dataService.getPartenir().subscribe(res => {
      this.partenirs = res;
    });
    // console.log('Hello Permission');
  }

  insertPartenirData(){
    this.dataService.insertPartenir(this.partenir).subscribe(res => {
      this.getPartenirData();
    });
    this.router.navigate(['partenir']);
    this.getPartenirData();
   // console.log(this.employee);
  }
}
