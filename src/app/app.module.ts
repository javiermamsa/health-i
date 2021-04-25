import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.model';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { ParrucchieriComponent } from './parrucchieri/parrucchieri.component';
import { SpaComponent } from './spa/spa.component';
import { AccountComponent } from './account/account.component';
import { WorkoutComponent } from './workout/workout.component';
import { MassageComponent } from './massage/massage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EsteticaComponent,
    ParrucchieriComponent,
    SpaComponent,
    AccountComponent,
    WorkoutComponent,
    MassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
