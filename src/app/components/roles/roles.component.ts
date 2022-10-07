import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
roles:any
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getroles()
  }

  getroles(){
    this.dataService.getRolesData().subscribe(res => {
      this.roles = res
    })
  }

  deletePartnirData(id: any){
    if(confirm("Vous etes sur que vous voulez supprimer cette Role")) {
    this.dataService.deleteRole(id).subscribe(res => {
      this.getroles();
    });
  //  console.log(id);
  }
}

  
}
