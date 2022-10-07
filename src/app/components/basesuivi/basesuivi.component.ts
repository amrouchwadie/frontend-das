import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-basesuivi',
  templateUrl: './basesuivi.component.html',
  styleUrls: ['./basesuivi.component.css']
})
export class BasesuiviComponent implements OnInit {

  prog1s:any
  prog2s:any
  prog3s:any
  prog4s:any
  pdhs:any;
  sppdhs:any
  
  totalRecord:any
  total2Record:any
  total3Record:any
  total4Record:any
data:any
  totalpdhsRecord:any;
  totalsppdhsRecord:any
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getprog1count()
    this.getprog2count()
    this.getprog3count()
    this.getprog4count()
    this.getpdhscount()
    this.getsppdhscount()
  }
  prog1Count = {
    id: 0
  }

  prog2Count = {
    id: 0
  }

  getprog1count(){
    // this.dataService.getProg1Data().subscribe(res => {
    //   this.prog1s = res
    //   this.totalRecord = this.prog1s.length;
    //   this.prog1s.forEach((row:any) => {
    //     if (row.id === 'id') {
    //         this.prog1Count.id++;
    //     }
    // });
    this.dataService.getprg1countData().subscribe((res) => {
      this.prog1s = res;
      this.totalRecord = this.prog1s.length;

      this.prog1s.forEach((row:any) => {
        if (row.id === 'id') {
          this.prog1Count.id++;
        }
      })
    })
  }

  getprog2count(){
    this.dataService.getprg2countData().subscribe((res) => {
      this.prog2s = res;
      this.total2Record = this.prog2s.length;

      this.prog2s.forEach((row:any) => {
        if (row.id === 'id') {
          this.prog2Count.id++;
        }
      })
    })
  }

  getprog3count(){
    this.dataService.getprg3countData().subscribe((res) => {
      this.prog3s = res;
      this.totalRecord = this.prog3s.length;

      this.prog3s.forEach((row:any) => {
        if (row.id === 'id') {
          this.prog1Count.id++;
        }
      })
    })
  }

  getprog4count(){
    this.dataService.getprg4countData().subscribe((res) => {
      this.prog4s = res;
      this.prog1Count = this.prog4s.length;

      this.prog4s.forEach((row:any) => {
        if (row.id === 'id') {
          this.prog1Count.id++;
        }
      })
    })
  }
  
  getpdhscount(){
    this.dataService.getpdhcountData().subscribe((res) => {
      this.pdhs = res;
      this.totalpdhsRecord = this.pdhs.length;

      this.pdhs.forEach((row:any) => {
        if (row.id === 'id') {
          this.totalpdhsRecord.id++;
        }
      })
    })
  }

  getsppdhscount(){
    this.dataService.getsppdhcountData().subscribe((res) => {
      this.sppdhs = res;
      this.totalsppdhsRecord = this.sppdhs.length;

      this.sppdhs.forEach((row:any) => {
        if (row.id === 'id') {
          this.totalsppdhsRecord.id++;
        }
      })
    })
  }

  getAnnProg1(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.getRechercheProgAnn(keyword).then(res => {
      this.prog1s =  res;
      this.prog2s =  res;
      this.prog3s =  res;
      this.prog4s =  res;
      return res;
    //  console.log(this.data);
    });
  }
  
  
}
