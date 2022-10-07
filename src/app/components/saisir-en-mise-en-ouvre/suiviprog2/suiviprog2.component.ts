import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-suiviprog2',
  templateUrl: './suiviprog2.component.html',
  styleUrls: ['./suiviprog2.component.css']
})
export class Suiviprog2Component implements OnInit {


  suivis:any;
  data:any;
    constructor(private dataService:DataService) { }
  
    ngOnInit(): void {
      this.getSuiviData();
    }
  
    
    getSuiviData(){
      this.dataService.getProg2Data().subscribe(res => {
        this.data = res;
      });
      // console.log('Hello Permission');
    }
    getSearchData(name:any){
      const keyword = name.target.value;
      console.log(keyword);
      const search = this.dataService.getRecherche(keyword).then(res => {
        this.data =  res;
        return res;
      //  console.log(this.data);
      });
    }
  
    getRefData(name:any){
      const keyword = name.target.value;
      console.log(keyword);
      const search = this.dataService.getRef(keyword).then(res => {
        this.data =  res;
        return res;
      //  console.log(this.data);
      });
    }
  
    getIntiata(name:any){
      const keyword = name.target.value;
      console.log(keyword);
      const search = this.dataService.getInti(keyword).then(res => {
        this.data =  res;
        return res;
      //  console.log(this.data);
      });
    }
  
    
    getSecData(name:any){
      const keyword = name.target.value;
      console.log(keyword);
      const search = this.dataService.getSec(keyword).then(res => {
        this.data =  res;
        return res;
      //  console.log(this.data);
      });
    }
  

}
