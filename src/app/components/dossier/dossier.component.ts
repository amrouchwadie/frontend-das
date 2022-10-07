import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { File } from 'src/app/file.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
files:any
file = new File();
  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.getfilesData();
  }

  getfilesData(){
    this.dataService.getfileData().subscribe(res => {
      this.files = res
    })
  }

  insertfilesdata(){
    this.dataService.insertfileData(this.file).subscribe(res => {
      this.getfilesData();
    });
    this.router.navigate(['folders']);
    this.getfilesData();
  }
}
