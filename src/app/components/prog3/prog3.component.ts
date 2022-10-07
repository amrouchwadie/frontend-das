import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Programme3 } from 'src/app/programme3.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-prog3',
  templateUrl: './prog3.component.html',
  styleUrls: ['./prog3.component.css']
})
export class Prog3Component implements OnInit {
 
  name:any;
  partenirs:any;
  // commun =  new Commun();
  // communs:any;
  // douar = new Douar();
  prog3 = new Programme3();
	selectedCommun: String = "--Choisir Commun--";

  constructor(private dataService: DataService,private route:ActivatedRoute,private formBuilder: FormBuilder,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getPartenirData();
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

getPartenirData(){
  this.dataService.getPartenir().subscribe(res => {
    this.partenirs = res;
  });
}

InsertProg3(){
  this.dataService.insertProg3Data(this.prog3).subscribe();
}


}
