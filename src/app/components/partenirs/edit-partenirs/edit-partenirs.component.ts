import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Partenir } from 'src/app/partenir';

@Component({
  selector: 'app-edit-partenirs',
  templateUrl: './edit-partenirs.component.html',
  styleUrls: ['./edit-partenirs.component.css']
})
export class EditPartenirsComponent implements OnInit {
  id:any;
  data:any;
  partenirs:any;
  partenir = new Partenir();
  constructor(private route:ActivatedRoute, private dataService: DataService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getParteData();
  }

  getParteData(){
    this.dataService.getPartenirById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.partenir = this.data;
    });
  }
  updateParte(){
    this.dataService.updatePartenir(this.id, this.partenir).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['partenir']);
    this.getPartnirData();
  }

  getPartnirData(){
    this.dataService.getPartenir().subscribe(res => {
      this.partenirs = res;
    });
  }

}
