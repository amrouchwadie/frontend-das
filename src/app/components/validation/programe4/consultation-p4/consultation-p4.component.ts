import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { ActivatedRoute } from '@angular/router';
import { Programme4 } from 'src/app/programme4.model';
@Component({
  selector: 'app-consultation-p4',
  templateUrl: './consultation-p4.component.html',
  styleUrls: ['./consultation-p4.component.css']
})
export class ConsultationP4Component implements OnInit {

  fileName= 'ExcelSheet.xlsx';
  id:any
  data:any;
  programme4 = new Programme4()
    constructor(private dataService:DataService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.getoneprog1Data()
    }
  
    getoneprog1Data(){
      this.dataService.getProg4ById(this.id).subscribe(res => {
        this.data = res
        this.programme4 = this.data
      })
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
