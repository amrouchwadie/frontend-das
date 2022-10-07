import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Commun } from 'src/app/commun.model';
import { Douar } from 'src/app/douar.model';
import { Programme1 } from 'src/app/programme1.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  partenirs:any;
  // commun =  new Commun();
  // communs:any;
  // douar = new Douar();
  prog1 = new Programme1();
	selectedCommun: String = "--Choisir Commun--";
  valide = ''

 
  constructor( private dataService: DataService,private route:ActivatedRoute,private formBuilder: FormBuilder,private http: HttpClient,private router:Router) { }
  
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

  ngOnInit(): void {
    this.getPartenirData();
    this.valide ='valider';
  }


  getPartenirData(){
    this.dataService.getPartenir().subscribe(res => {
      this.partenirs = res;
    });
  }

  InsertProg1(){
    this.dataService.insertProg1Data(this.prog1).subscribe(res => {
      this.getPartenirData()
    });
    this.router.navigate(['searchp1']);
    this.getPartenirData();
  }
}
