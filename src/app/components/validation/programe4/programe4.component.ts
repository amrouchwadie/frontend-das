import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Programme4 } from 'src/app/programme4.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-programe4',
  templateUrl: './programe4.component.html',
  styleUrls: ['./programe4.component.css']
})
export class Programe4Component implements OnInit {


  
  data:any
  progs:any;
  id:any;
  
  partenirs:any;
  programe4 = new Programme4();
  
  
    constructor(private route:ActivatedRoute, private dataService: DataService,private router: Router,private http:HttpClient) { }
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
      this.id = this.route.snapshot.params['id'];
      this.getProg1Data();
      this. getPartenirData()
    }
    getPlannData(){
      this.dataService.getP4Data().subscribe(res => {
        
        this.progs = res;
      });
      // console.log('Hello Permission');
    }
   
    getProg1Data(){
      this.dataService.getProg4ById(this.id).subscribe(res => {
      //  console.log(res);
      this.data = res;
      this.programe4 = this.data;
      });
    }
  
    updateProg1(){
      this.dataService.updateProg4Data(this.id, this.programe4).subscribe(res => {
     //   console.log('hello');
      });
      this.router.navigate(['searchp4']);
      this.getPlannData();
    }
    
    getPartenirData(){
      this.dataService.getPartenir().subscribe(res => {
        this.partenirs = res;
      });
    }

}
