import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activitroyal } from 'src/app/activitroyal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editvisit',
  templateUrl: './editvisit.component.html',
  styleUrls: ['./editvisit.component.css']
})
export class EditvisitComponent implements OnInit {
  id:any;
  data:any;
  visites:any;
  visite = new Activitroyal();
  constructor(private route:ActivatedRoute, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getActivebyIdData();
  }
  selectedCountry: String = "--Choose Country--";
  
  countryList: Array<any> = [
    { name: 'AL BAHRAOYINE', cities: ['BNI MASSOUD','BNI MJAMEL','BNI OUASSIN','FDAN CHAPO','FDAN SAIDI','LMNAR','NOUINOUICHE','ZAITOUNA'] },
    { name: 'ANJRA', cities: ['AAZIBYECH','AIN BOUSSETA','AIN HARRAT','AIN LEFKHOYKH','AL FAHAMINE','BGHLICH','BNI TALIB','BNI ATTAB'] },
    { name: 'JOUAMAA', cities: ['AIDADA','DAR MIMOUE','DAYA','DHAR BERDAE','DHAR EL OUASSITI','DHAR RMEL','EL ATNOUN','EL GHRIFA'] },
    { name: 'KSAR AL MAJAZ', cities: ['AZGAOUAZ','AIN AGAIZ','AIN CHOKA','AIN SGHIR','BOABAD FOKIA','BOUABAD SOFLIA','DALIA','DHAR KHAROUB','DOKCHIR','HAMMA','HOUAMA','HJIRA','HTATECH'] },
    { name: 'KSAR SGHIR', cities: ['AGNOUAN','AIN R-MEL','AMLICH DIKKI','AZRARAA','DAR FOUAL','FERDOUIA','FERSOUIA','GHAOUJINE'] },
    { name: 'MESLLOUSSA', cities: ['AIN HAMRA','AIN OUNSSAR','AIN SAÏD','AZIB BOULAICHE','DOUAR HOUMRANE','EL BORJ','EL HAMMOUMI','EL MEKHFI','GHDIR DEFLA','GHZILIECHE'] },
    { name: 'TAGHRAMT', cities: ['AIN JIR','AMZOUK','BAYNE EL OUIDANE','BYOUT','DAHER','DAR A YADECH','DAR LAHJAR','DCHICHA','DHAR'] },
  ];

  states: Array<any> = []; //Angular 11
  cities: Array<any> = []; //Angular 11

//changeCountry(country) { //Angular 8
changeCountry(count:any) {
  this.cities = this.countryList.find((con:any) => con.name == count.target.value).cities;
}


  getActivebyIdData(){
    this.dataService.getActivityById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.visite = this.data;
    });
  }
  updateActive(){
    this.dataService.updateActivityData(this.id, this.visite).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['activeroyal']);
    this.getActivityData();
  }

  getActivityData(){
    this.dataService.getactivityData().subscribe(res => {
      this.visites = res;
    });
  }



}
