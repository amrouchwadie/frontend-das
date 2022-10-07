import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activitroyal } from 'src/app/activitroyal.model';
import { DataService } from 'src/app/service/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-consultvisit',
  templateUrl: './consultvisit.component.html',
  styleUrls: ['./consultvisit.component.css']
})
export class ConsultvisitComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  id:any;
  data:any;
  visites:any;
  visite = new Activitroyal();
  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getActivebyIdData();
  }

  
  getActivebyIdData(){
    this.dataService.getActivityById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.visite = this.data;
    });
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Constuler-pdf.pdf');
    });
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


}
