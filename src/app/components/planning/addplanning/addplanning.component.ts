import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planning } from 'src/app/planning.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addplanning',
  templateUrl: './addplanning.component.html',
  styleUrls: ['./addplanning.component.css']
})
export class AddplanningComponent implements OnInit {
  plannings:any;
  data:any;
  name:any;
  id:any;
  planning = new Planning();


  constructor(private dataService:DataService,private router: Router,private route:ActivatedRoute) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSpphdData();
  }

  getSpphdData(){
  this.dataService.getSppdhById(this.id).subscribe(res => {
  //  console.log(res);
  this.data = res;
  this.planning = this.data;
  });
}
updateSppdh(){
  this.dataService.updateSppdhData(this.id, this.planning).subscribe(res => {
 //   console.log('hello');
  });
  this.router.navigate(['sppdh']);
  this.getPlannData();
}


getPlannData(){
  this.dataService.getPlandata().subscribe(res => {
    
    this.plannings = res;
  });
  // console.log('Hello Permission');
}


}
