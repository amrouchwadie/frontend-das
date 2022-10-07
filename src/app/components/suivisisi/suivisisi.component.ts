import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { Validates } from 'src/app/validates.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suivisisi',
  templateUrl: './suivisisi.component.html',
  styleUrls: ['./suivisisi.component.css']
})
export class SuivisisiComponent implements OnInit {
id:any
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
    this.getcalendardata()
    this.getcalendars()
   
  }
  title = 'Gestion de Reunion';
  validate=new Validates();
  calendars:any
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
    
    // bind is important!
    events: [
    
    ]
    
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  getcalendardata(){
    this.dataService.getcalendarData().subscribe(res => {
      this.calendarOptions = {
        events: res
      }
      
    });
  }

  getcalendars(){
    this.dataService.getcalendarData().subscribe(res => {
     this.calendars = res
    })
  }
  insertData(){
    this.dataService.insertcalendarData(this.validate).subscribe(res => {
      
      this.getcalendars();
      this.getcalendardata()
    });
   // console.log(this.employee);
  }
  deleteData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette permission")) {
    this.dataService.deletecalendarData(id).subscribe(res => {
      this.getcalendars();
      this.getcalendardata()
    });
  //  console.log(id);
  }
}

getData(){
  this.dataService.getvalidateById(this.id).subscribe(res => {
  //  console.log(res);
  this.calendars = res;
  this.validate = this.calendars;
  });
}
updateValidation(){
  this.dataService.updateValidateData(this.id, this.validate).subscribe(res => {
 //   console.log('hello');
  });
  this.router.navigate(['runion']);
  this.getcalendars();
  this.getcalendardata()
}
}
