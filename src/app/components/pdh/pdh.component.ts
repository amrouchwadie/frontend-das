import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Pdh } from 'src/app/pdh';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pdh',
  templateUrl: './pdh.component.html',
  styleUrls: ['./pdh.component.css']
})
export class PdhComponent implements OnInit {
  id:any;
  data:any;
  annees:any;
  anns:any;
  pdh = new Pdh();
  form: FormGroup | any;
  annee:any;
  year:any;
message='';
idd=''
  constructor(private http: HttpClient,private dataService:DataService,private FormBuilder:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.year = this.route.snapshot.params['annee'];
    this.getYerData();
    this.getPdhbyidData();
    this.subs();
    this.getAnnData();
    this.getlastyeardata();


    this.form = this.FormBuilder.group({
      annee:'',
     });
     this.http.get('http://localhost:8000/api/dashboard',{withCredentials:true}).subscribe(
      (res:any) => {
        this.message = `${res.name}`;
        this.idd = `${res.role_id}`;
      },
      err => {
        this.message = 'you are not logged in';
      } 
    );

  }



  

  getlastyeardata(){
    this.dataService.getlastyear().subscribe(res => {
      console.log( this.anns = res);
      this.anns = res
    });
  }

  getSearchData(name:any){
    const keyword = name.target.value;
    console.log(keyword);
    const search = this.dataService.LookAnnee(keyword).then(res => {
      
      this.data =  res;
      
      return res;
     

    //  console.log(this.data);
    } 
    );
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
    this.router.navigate(['pdh/'+keyword]);
    });
    this.getYerData();
    this.getAnnData();

  }
// -----------------------------------------------------------
  InsertPdhData(){
    this.dataService.InsertPdh(this.pdh).subscribe(res => {
      this.annee = `${this.pdh.annee+1}`;
      this.getAnnData();
    });
    this.router.navigate(['pdh']);
    this.getlastyeardata();
   // console.log(this.employee);
  }

  // submit(): void{
    
  //   this.http.post('http://127.0.0.1:8000/api/addPdh',this.form.getRawValue()).subscribe((res:any) => {
      
  //   });
  // }

  subs(){
  this.http.get('http://localhost:8000/api/getlastannee').subscribe(
    (res:any) => {
      
      this.annee = `${res.annee+1}`;
      
    },
    
  );}

  // --------------------------------------------


  getPdhbyidData(){
    this.dataService.getPdhById(this.id).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.pdh = this.data;
    });
  }

  updatePPdh(){
    this.dataService.updatePdh(this.id, this.pdh).subscribe(res => {
   //   console.log('hello');
    });
    this.router.navigate(['pdh']);
    this.getAnnData();
  }

  getAnnData(){
    this.dataService.getpdh().subscribe(res => {
      this.annees = res;
    });
  }

 
  getYerData(){
    this.dataService.getbyyear(this.year).subscribe(res => {
    //  console.log(res);
    this.data = res;
    this.pdh = this.data;
    });
  }
  AnneePdhData(){
    this.dataService.AnneePdh(this.year,this.pdh).subscribe(res => {
     console.log(this.pdh);
    });
  
    this.getYearsData();
  }
  getYearsData(){
    this.dataService.getpdh().subscribe(res => {
      this.annees = res;
    });
  }




}
