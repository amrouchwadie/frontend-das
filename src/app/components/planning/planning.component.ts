import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as XLSX from 'xlsx';
import { Planning } from 'src/app/planning.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';

  plannings:any;
  data:any;
  name:any;
  id:any;
  planning = new Planning();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPlannData();

  }

importData(){
  this.dataService.ImportPlanData(this.planning).subscribe(res => {
    this.getPlannData();
  });

  this.getPlannData();
}


  getSearchAnn(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.RechAnnee(keyword).then(res => {
      this.plannings =  res;
      return res;
    //  console.log(this.data);
    });
  }

  getSearchProg(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.RechProg(keyword).then(res => {
      this.plannings =  res;
      return res;
    //  console.log(this.data);
    });
  }


  getPlannData(){
    this.dataService.getPlandata().subscribe(res => {
      
      this.plannings = res;
    });
    // console.log('Hello Permission');
  }

  insertPlanData(){
    this.dataService.insertPlanData(this.planning).subscribe(res => {
      this.getPlannData();
    });

    this.getPlannData();
   // console.log(this.employee);
  }

  deleteSppdhData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette Paretnir")) {
    this.dataService.deleteSppdh(id).subscribe(res => {
      this.getPlannData();
    });
  //  console.log(id);
  }
}



  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

//   fileDownload(){
//     var abcd = { 
//       fieldSeparator: ',',
//       quoteStrings: '"',
//       decimalseparator: '.',
//       showLabels: true, 
//       showTitle: true,
//       title: 'Your title',
//       useBom: true,
//       Download: true,
//       headers: ["Année de Plannification", "Type Projet", "Dimension Ciblée","Problématique Ciblée","Frein du Développement","Nombre de Projet","Cout Total"]
//     };
   
//     new ngxCsv(this.dataService.getPlandata(), "raport", abcd);
//   }

// }
// function saveAs(res: any, arg1: string) {
//   throw new Error('Function not implemented.');
// }
}
