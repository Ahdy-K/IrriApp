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
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
