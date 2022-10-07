import { Injectable } from '@angular/core';
import { Permission } from '../permission';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../register.model';
import { Partenir } from '../partenir';
import { User } from '../user';
import { Pdh } from '../pdh';
import { Planning } from '../planning.model';
import { Douar } from '../douar.model';
import { Commun } from '../commun.model';
import { Programme1 } from '../programme1.model';
import { Programme2 } from '../programme2.model';
import { Programme3 } from '../programme3.model';
import { Programme4 } from '../programme4.model';
import { Validates } from '../validates.model';
import { File } from '../file.model';
import { Filedoc } from '../filedoc.model';
import {Observable} from 'rxjs';
import { Activitroyal } from '../activitroyal.model';
import { Role } from '../role.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  session: any;

  constructor(private httpClient:HttpClient) { }

  loginUser(data:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login/', data);
  }

  // ------------------------------------------------------------------------------
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/permissions');
  }
  insertData(data: Permission){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPermission', data);
  }
  deleteData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePermission/'+id);
  }

  getPermissionById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/permissions/'+id);
  }

  updateData(id: string,data: Permission){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePermission/'+id, data);
  }
  // ----------------------------------------------------------------------------------

 

  // ----------------------------------------------------------------------------------

  getPartenir() {
    return this.httpClient.get('http://127.0.0.1:8000/api/partenirs');
  }
  insertPartenir(data: Partenir){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPartenir', data);
  }
  deletePartenir(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePartenir/'+id);
  }

  getPartenirById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/partenirs/'+id);
  }

  updatePartenir(id: string,data: Partenir){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePartenir/'+id, data);
  }


  // --------------------------------------------------------------------------------------------

  getUser() {
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }
  getUserById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/profiledetail/'+id);
  }
  updateUsers(id: string,data: User){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateUser/'+id, data);
  }
  deleteUser(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteUser/'+id);
  }

  allusers() {
    return this.httpClient.get('http://127.0.0.1:8000/api/allusers');
  }

  onlyTrashed() {
    return this.httpClient.get('http://127.0.0.1:8000/api/onlytrashed');
  }

  getIdUser(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/IdbyUser/'+id);
  }

  restoreUser(id: string,data: User){
    return this.httpClient.patch('http://127.0.0.1:8000/api/restore/'+id,data);
  }


  getGroupsdata() {
    return this.httpClient.get('http://127.0.0.1:8000/api/groups');
  }

  
  getGroupById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/getGroupbyId/'+id);
  }

  //----------------------------------------------------------------------------
  getSuivi() {
    return this.httpClient.get('http://127.0.0.1:8000/api/suivis');
  }

  getRecherche(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_suivi?search_suivi=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  
  getRef(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_ref?search_ref=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getSec(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_sec?search_sec=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getInti(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_inti?search_inti=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  // ---------------------------------------------------------------------

  LookAnnee(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_annee?search_annee=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getpdh() {
    return this.httpClient.get('http://127.0.0.1:8000/api/pdhs');
  }

  InsertPdh(data: Pdh){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPdh', data);
  }

  getPdhById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/pdhs/'+id);
  }

  updatePdh(id: string,data: Pdh){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePdh/'+id, data);
  }

  getlastyear() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastannee');
  }

  updatePdhData(id: string,data: Pdh){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePdh/'+id, data);
  }


  AnneePdh(annee: BigInteger,data: Pdh){
    return this.httpClient.put('http://127.0.0.1:8000/api/pdhupd/'+annee,data);
  }

  getbyyear(annee: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/annefindit/'+annee);
  }


  getPlandata() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getplanificationppdh');
  }

  RechAnnee(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_ann?search_ann=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  RechProg(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_prog?search_prog=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  insertPlanData(data: Planning){
    return this.httpClient.post('http://127.0.0.1:8000/api/addplanificationppdh', data);
  }

  deleteSppdh(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteplanificationppdh/'+id);
  }

  getSppdhById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/getplanificationppdh/'+id);
  }

  updateSppdhData(id: string,data: Planning){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateplanificationppdh/'+id, data);
  }

  ImportPlanData(data: Planning){
    return this.httpClient.post('http://127.0.0.1:8000/api/addplanificationppdh', data);
  }

  // ------------

  getCommunData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/communs');
  }
  insertCommunData(data: Commun){
    return this.httpClient.post('http://127.0.0.1:8000/api/addCommun', data);
  }
  deleteCommunData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteCommun/'+id);
  }

  getCommunById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/communs/'+id);
  }

  updateCommunData(id: string,data: Commun){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateCommun/'+id, data);
  }

  getCommunDouarData(id:string) {
    return this.httpClient.get('http://127.0.0.1:8000/api/communs/douars/'+id);
  }


  // ---------------

  getDouarData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/douars');
  }
  insertDouarData(data: Douar){
    return this.httpClient.post('http://127.0.0.1:8000/api/addDouar', data);
  }
  deleteDouarData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteDouar/'+id);
  }

  getDouarById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/douars/'+id);
  }

  updateDouarData(id: string,data: Douar){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateDouar/'+id, data);
  }


  getProg1Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes1');
  }
  insertProg1Data(data: Programme1){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProgramme1', data);
  }
  deleteProg1Data(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProgramme1/'+id);
  }

  getProg1ById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes1/'+id);
  }

  updateProg1Data(id: string,data: Programme1){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProgramme1/'+id, data);
  }

  
  getRechercheProg(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_progr?search_progr=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }


  getRechercheProgAnn(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_enn?search_enn=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProgIntitule(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_intutle?search_intutle=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProgTypeProjet(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_typeprojet?search_typeprojet=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  // ---------------
  
  getProg2Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes2');
  }
  insertProg2Data(data: Programme2){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProgramme2', data);
  }
  deleteProg2Data(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProgramme2/'+id);
  }

  getProg2ById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes2/'+id);
  }

  updateProg2Data(id: string,data: Programme2){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProgramme2/'+id, data);
  }

  
  getRechercheProg2(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/search/search_progr?search_progr=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }


  getRechercheProg2Ann(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/search/search_enn?search_enn=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg2Intitule(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/search/search_intutle?search_intutle=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg2TypeProjet(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/search/search_typeprojet?search_typeprojet=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  // -------------

  getProg3Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes3');
  }
  insertProg3Data(data: Programme3){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProgramme3', data);
  }
  deleteProg3Data(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProgramme3/'+id);
  }

  getProg3ById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes3/'+id);
  }

  updateProg3Data(id: string,data: Programme3){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProgramme3/'+id, data);
  }

  getRechercheProg3(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/baht/search_progr?search_progr=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }


  getRechercheProg3Ann(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/baht/search_enn?search_enn=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg3Intitule(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/baht/search_intutle?search_intutle=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg3TypeProjet(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/baht/search_typeprojet?search_typeprojet=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  // -----------------

  getProg4Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes4');
  }
  insertProg4Data(data: Programme4){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProgramme4', data);
  }
  deleteProg4Data(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProgramme4/'+id);
  }

  getProg4ById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/programmes4/'+id);
  }

  updateProg4Data(id: string,data: Programme4){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProgramme4/'+id, data);
  }

 

  getRechercheProg4(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/lookup/search_progr?search_progr=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }


  getRechercheProg4Ann(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/lookup/search_enn?search_enn=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg4Intitule(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/lookup/search_intutle?search_intutle=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProg4TypeProjet(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/lookup/search_typeprojet?search_typeprojet=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  
  getP1Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getP1');
  }
  getP2Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getP2');
  }
  getP3Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getP3');
  }
  getP4Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getP4');
  }

  getCountP1Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastids');
  }
  getCountP2Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastidss');
  }
  getCountP3Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastidsss');
  }
  getCountP4Data() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastidssss');
  }
  getAnnRecherche(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_annn?search_annn=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getRechercheProgrammes(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_program?search_program=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getcalendarData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/validates');
  }
  insertcalendarData(data: Validates){
    return this.httpClient.post('http://127.0.0.1:8000/api/addValidate', data);
  }
  deletecalendarData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteValidate/'+id);
  }
  getvalidateById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/validates/'+id);
  }
  updateValidateData(id: string,data: Validates){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateValidate/'+id, data);
  }


  getprg1countData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countprogramme1');
  }
  getprg2countData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countprogramme2');
  }
  getprg3countData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countprogramme3');
  }
  getprg4countData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countprogramme4');
  }

  getpdhcountData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countPdh');
  }
  getsppdhcountData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/countsppdh');
  }

  
  getfileData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/files');
  }
  insertfileData(data: File){
    return this.httpClient.post('http://127.0.0.1:8000/api/addFiles', data);
  }
  deletefileData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteFile/'+id);
  }
  getfileById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/files/'+id);
  }
  updatefileeData(id: string,data: File){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateFile/'+id, data);
  }
  getfiledocsById(id: string){
    
    return this.httpClient.get('http://127.0.0.1:8000/api/files/filedocs/'+id);
  }



  getfiledocData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/filedocs');
  }
  getfiledocById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/filedocs/'+id,{ responseType: 'blob' });
  }
  insertfiledocData(data: Filedoc){
    return this.httpClient.post('http://127.0.0.1:8000/api/addFiledocs', data);
    
  }

  upload(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.httpClient.post('http://127.0.0.1:8000/api/addFiledocs', formData)
}

getactivityData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/activiteroyals');
  }
  insertActivityData(data: Activitroyal){
    return this.httpClient.post('http://127.0.0.1:8000/api/addActivites', data);
  }
  deleteActivityData(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteActivites/'+id);
  }

  getActivityById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/activiteroyals/'+id);
  }

  updateActivityData(id: string,data: Activitroyal){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateActivites/'+id, data);
  }

  getVisiteRecherche(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_visite?search_visite=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getCommunRecherche(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_commun?search_commun=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getSectorRecherche(name:string) {
    const response = new Promise(resolve => {
    return this.httpClient.get(`http://127.0.0.1:8000/api/recherche/search_sector?search_sector=${name}`).subscribe(data => {
      resolve(data)
    }, err=>{
      console.log(err)
    });
  });
  return response;
  }

  getDownload(data: Programme1){
    return this.httpClient.post('http://127.0.0.1:8000/api/addfileimport', data);
  }


  getDownloadprog2(data: Programme2){
    return this.httpClient.post('http://127.0.0.1:8000/api/addfileimportprog2', data);
  }

  getDownloadprog3(data: Programme3){
    return this.httpClient.post('http://127.0.0.1:8000/api/addfileimportprog3', data);
  }
  getDownloadprog4(data: Programme4){
    return this.httpClient.post('http://127.0.0.1:8000/api/addfileimportprog4', data);
  }


// -----------

  getRolesData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/roles');
  }

  getRoleById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/role/'+id);
  }

  insertRole(data: Role){
    return this.httpClient.post('http://127.0.0.1:8000/api/addRole', data);
  }
  deleteRole(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteRole/'+id);
  }
  updateRole(id: string,data: Role){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateRole/'+id, data);
  }
  
 
  getuserByd(id: string){
    
    return this.httpClient.get('http://127.0.0.1:8000/api/userRole/'+id);
  }


}
