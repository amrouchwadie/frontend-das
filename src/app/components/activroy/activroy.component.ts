import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-activroy',
  templateUrl: './activroy.component.html',
  styleUrls: ['./activroy.component.css']
})
export class ActivroyComponent implements OnInit {
visites:any
data:any
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getroyalvisitdata()
  }

getroyalvisitdata(){
  this.dataService.getactivityData().subscribe(res => {
    this.data = res
  })
}

getSearchVisiteData(name:any){
  const keyword = name.target.value;
  console.log(keyword);
  const search = this.dataService.getVisiteRecherche(keyword).then(res => {
    this.data =  res;
    return res;
  //  console.log(this.data);
  });
}


getSearchCommunData(name:any){
  const keyword = name.target.value;
  console.log(keyword);
  const search = this.dataService.getCommunRecherche(keyword).then(res => {
    this.data =  res;
    return res;
  //  console.log(this.data);
  });
}

getSearchSectorData(name:any){
  const keyword = name.target.value;
  console.log(keyword);
  const search = this.dataService.getCommunRecherche(keyword).then(res => {
    this.data =  res;
    return res;
  //  console.log(this.data);
  });
}

deleteVisiteData(id: any){
  if(confirm("Vous etes sur que vous voulez supprimer cette Paretnir")) {
  this.dataService.deleteActivityData(id).subscribe(res => {
    this.getroyalvisitdata();
  });
//  console.log(id);
}

}
}
