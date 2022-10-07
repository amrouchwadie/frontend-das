import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartenirsComponent } from './components/partenirs/partenirs.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPermissionsComponent } from './components/permissions/add-permissions/add-permissions.component';
import { EditPermissionsComponent } from './components/permissions/edit-permissions/edit-permissions.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPartenirsComponent } from './components/partenirs/add-partenirs/add-partenirs.component';
import { EditPartenirsComponent } from './components/partenirs/edit-partenirs/edit-partenirs.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { UpdateprofileComponent } from './components/editprofile/updateprofile/updateprofile.component';
import { UsersComponent } from './components/users/users.component';
import { RestoreComponent } from './components/users/restore/restore.component';
import { RolesComponent } from './components/roles/roles.component';
import { ToastrModule } from 'ngx-toastr';
import { SaisirEnMiseEnOuvreComponent } from './components/saisir-en-mise-en-ouvre/saisir-en-mise-en-ouvre.component';
import { PdhComponent } from './components/pdh/pdh.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
import { Navbar4Component } from './components/navbar4/navbar4.component';
import { ActivroyComponent } from './components/activroy/activroy.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanningComponent } from './components/planning/planning.component';
import { AddplanningComponent } from './components/planning/addplanning/addplanning.component';
import { LocationsComponent } from './components/locations/locations.component';
import { Prog2Component } from './components/prog2/prog2.component';
import { Prog3Component } from './components/prog3/prog3.component';
import { Prog4Component } from './components/prog4/prog4.component';
import { SearchprogComponent } from './components/searchprog/searchprog.component';
import { GreuComponent } from './components/greu/greu.component';
import { Searchprog2Component } from './components/prog2/searchprog2/searchprog2.component';
import { CallinfoDialogComponent } from './components/greu/callinfo-dialog/callinfo-dialog.component';
import { Seachprog3Component } from './components/prog3/seachprog3/seachprog3.component';
import { Seachprog4Component } from './components/prog4/seachprog4/seachprog4.component';
import { SuivisisiComponent } from './components/suivisisi/suivisisi.component';
import { ValidationComponent } from './components/validation/validation.component';
import { BasesuiviComponent } from './components/basesuivi/basesuivi.component';
import { Consultingprog1Component } from './components/searchprog/consultingprog1/consultingprog1.component';
import { DossierComponent } from './components/dossier/dossier.component';
import { DocfileComponent } from './components/dossier/docfile/docfile.component';
import { DisplaydossierComponent } from './components/dossier/displaydossier/displaydossier.component';
import { DisplayfileComponent } from './components/dossier/displayfile/displayfile.component';
import { AddvisitComponent } from './components/activroy/addvisit/addvisit.component';
import { EditvisitComponent } from './components/activroy/editvisit/editvisit.component';
import { ConsultvisitComponent } from './components/activroy/consultvisit/consultvisit.component';
import { ConsultationComponent } from './components/saisir-en-mise-en-ouvre/consultation/consultation.component';
import { Programe2Component } from './components/validation/programe2/programe2.component';
import { ConsultationP2Component } from './components/validation/programe2/consultation-p2/consultation-p2.component';
import { Programe3Component } from './components/validation/programe3/programe3.component';
import { ConsultationP3Component } from './components/validation/programe3/consultation-p3/consultation-p3.component';
import { Programe4Component } from './components/validation/programe4/programe4.component';
import { ConsultationP4Component } from './components/validation/programe4/consultation-p4/consultation-p4.component';
import { Suiviprog2Component } from './components/saisir-en-mise-en-ouvre/suiviprog2/suiviprog2.component';
import { Consultprog2Component } from './components/saisir-en-mise-en-ouvre/suiviprog2/consultprog2/consultprog2.component';
import { Suiviprog3Component } from './components/saisir-en-mise-en-ouvre/suiviprog3/suiviprog3.component';
import { Consultprog3Component } from './components/saisir-en-mise-en-ouvre/suiviprog3/consultprog3/consultprog3.component';
import { Suiviprog4Component } from './components/saisir-en-mise-en-ouvre/suiviprog4/suiviprog4.component';
import { Consultprog4Component } from './components/saisir-en-mise-en-ouvre/suiviprog4/consultprog4/consultprog4.component';
import { EdituseComponent } from './components/users/edituse/edituse.component';
import { AddrolesComponent } from './components/roles/addroles/addroles.component';
import { EditrolesComponent } from './components/roles/editroles/editroles.component';
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent, data: { requiresLogin: true },},
  {path: 'permissions', component:PermissionsComponent,data: { requiresLogin: true }},
  {path: 'addPermissions', component:AddPermissionsComponent,data: { requiresLogin: true }},
  {path: 'editPermission/:id', component:EditPermissionsComponent,data: { requiresLogin: true }},
  {path: 'partenir', component:PartenirsComponent,data: { requiresLogin: true }},
  {path: 'addPartenir', component:AddPartenirsComponent,data: { requiresLogin: true }},
  {path: 'editpartenir/:id', component:EditPartenirsComponent,data: { requiresLogin: true }},
  {path: 'editprofile/:id', component:EditprofileComponent,data: { requiresLogin: true }},
  {path: 'updateprofile/:id', component:UpdateprofileComponent,data: { requiresLogin: true }},
  {path: 'users', component:UsersComponent,data: { requiresLogin: true }},
  {path: 'restore/:id', component:RestoreComponent,data: { requiresLogin: true }},
  {path: 'suivi', component:SaisirEnMiseEnOuvreComponent, data: { requiresLogin: true },},
  {path: 'pdh', component:PdhComponent, data: { requiresLogin: true },},
  {path: 'pdh/:annee', component:PdhComponent, data: { requiresLogin: true },},
  {path: 'activeroyal', component:ActivroyComponent, data: { requiresLogin: true },},
  {path: 'reunion', component:ReunionComponent, data: { requiresLogin: true },},
  {path: 'sppdh', component:PlanningComponent, data: { requiresLogin: true },},
  {path: 'editsppdh/:id', component:AddplanningComponent, data: { requiresLogin: true },},
  {path: 'locations', component:LocationsComponent, data: { requiresLogin: true },},
  {path: 'prog2', component:Prog2Component, data: { requiresLogin: true },},
  {path: 'prog3', component:Prog3Component, data: { requiresLogin: true },},
  {path: 'prog4', component:Prog4Component, data: { requiresLogin: true },},
  {path: 'searchp1', component:SearchprogComponent, data: { requiresLogin: true },},
  {path: 'greunion', component:GreuComponent, data: { requiresLogin: true },},
  {path: 'searchp2', component:Searchprog2Component, data: { requiresLogin: true },},
  {path: 'searchp3', component:Seachprog3Component, data: { requiresLogin: true },},
  {path: 'searchp4', component:Seachprog4Component, data: { requiresLogin: true },},
  {path: 'editlocation/:id', component:ValidationComponent, data: { requiresLogin: true },},
  {path: 'runion', component:SuivisisiComponent, data: { requiresLogin: true },},
  {path: 'reunion/:id', component:SuivisisiComponent, data: { requiresLogin: true },},
  {path: 'suivibase', component:BasesuiviComponent, data: { requiresLogin: true },},
  {path: 'consultprog1/:id', component:Consultingprog1Component, data: { requiresLogin: true },},
  {path: 'adddossier', component:DossierComponent, data: { requiresLogin: true },},
  {path: 'addfile', component:DocfileComponent, data: { requiresLogin: true },},
  {path: 'folders', component:DisplaydossierComponent, data: { requiresLogin: true },},
  {path: 'files/:id', component:DisplayfileComponent, data: { requiresLogin: true },},
  {path: 'addvisit', component:AddvisitComponent, data: { requiresLogin: true },},
  {path: 'editvisit/:id', component:EditvisitComponent, data: { requiresLogin: true },},
  {path: 'consultvisit/:id', component:ConsultvisitComponent, data: { requiresLogin: true },},
  {path: 'consultsuivi/:id', component:ConsultationComponent, data: { requiresLogin: true },},
  {path: 'editprog2/:id', component:Programe2Component, data: { requiresLogin: true },},
  {path: 'consultprog2/:id', component:ConsultationP2Component, data: { requiresLogin: true },},
  {path: 'editprog3/:id', component:Programe3Component, data: { requiresLogin: true },},
  {path: 'consultprog3/:id', component:ConsultationP3Component, data: { requiresLogin: true },},
  {path: 'editprog4/:id', component:Programe4Component, data: { requiresLogin: true },},
  {path: 'consultprog4/:id', component:ConsultationP4Component, data: { requiresLogin: true },},
  {path: 'suiviprog2', component:Suiviprog2Component, data: { requiresLogin: true },},
  {path: 'showprog2/:id', component:Consultprog2Component, data: { requiresLogin: true },},
  {path: 'suiviprog3', component:Suiviprog3Component, data: { requiresLogin: true },},
  {path: 'showprog3/:id', component:Consultprog3Component, data: { requiresLogin: true },},
  {path: 'suiviprog4', component:Suiviprog4Component, data: { requiresLogin: true },},
  {path: 'showprog4/:id', component:Consultprog4Component, data: { requiresLogin: true },},
  {path: 'usermodif/:id', component:EdituseComponent, data: { requiresLogin: true },},
  {path: 'getroles', component:RolesComponent, data: { requiresLogin: true },},
  {path: 'newrole', component:AddrolesComponent, data: { requiresLogin: true },},
  {path: 'editrole/:id', component:EditrolesComponent, data: { requiresLogin: true },},
];
FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PartenirsComponent,
    PermissionsComponent,
    NavbarComponent,
    AddPermissionsComponent,
    EditPermissionsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddPartenirsComponent,
    EditPartenirsComponent,
    EditprofileComponent,
    UpdateprofileComponent,
    UsersComponent,
    RestoreComponent,
    RolesComponent,
    SaisirEnMiseEnOuvreComponent,
    PdhComponent,
    Navbar2Component,
    Navbar3Component,
    Navbar4Component,
    ActivroyComponent,
    ReunionComponent,
    PlanningComponent,
    AddplanningComponent,
    LocationsComponent,
    Prog2Component,
    Prog3Component,
    Prog4Component,
    SearchprogComponent,
    GreuComponent,
    Searchprog2Component,
    CallinfoDialogComponent,
    Seachprog3Component,
    Seachprog4Component,
    SuivisisiComponent,
    ValidationComponent,
    BasesuiviComponent,
    Consultingprog1Component,
    DossierComponent,
    DocfileComponent,
    DisplaydossierComponent,
    DisplayfileComponent,
    AddvisitComponent,
    EditvisitComponent,
    ConsultvisitComponent,
    ConsultationComponent,
    Programe2Component,
    ConsultationP2Component,
    Programe3Component,
    ConsultationP3Component,
    Programe4Component,
    ConsultationP4Component,
    Suiviprog2Component,
    Consultprog2Component,
    Suiviprog3Component,
    Consultprog3Component,
    Suiviprog4Component,
    Consultprog4Component,
    EdituseComponent,
    AddrolesComponent,
    EditrolesComponent,

    
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    NgbModalModule,
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
