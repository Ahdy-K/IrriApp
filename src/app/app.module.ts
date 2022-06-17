import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ControlpageComponent } from './controlpage/controlpage.component';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { UpdateequipmentComponent } from './updateequipment/updateequipment.component';
import { EquipmentdetailsComponent } from './equipmentdetails/equipmentdetails.component';
import { MeteoComponent } from './meteo/meteo.component';
import { CommandsComponent } from './commands/commands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DeleteequipmentComponent } from './deleteequipment/deleteequipment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes:Routes=[
  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:"/home", component:HomeComponent},
  {path:"/login", component:LoginComponent},
  {path:"/resetpassword", component:ResetpasswordComponent},
  {path:"/register", component:CreateaccountComponent},

  {path:"/commandes", component:CommandsComponent},
  {path:"/controlpage", component:ControlpageComponent},
  // Les équippements
  {path:"/addequipment", component:AddequipmentComponent},
  {path:"/equipementdetails/:id",component:EquipmentdetailsComponent},
  {path:"/updateequipment/:id", component:UpdateequipmentComponent},
  {path:"/deleteequipement/:id", component:DeleteequipmentComponent},
  {path:"/meteo", component:MeteoComponent},

  {path:"**", component:PagenotfoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateaccountComponent,
    ResetpasswordComponent,
    ControlpageComponent,
    AddequipmentComponent,
    UpdateequipmentComponent,
    EquipmentdetailsComponent,
    MeteoComponent,
    CommandsComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
