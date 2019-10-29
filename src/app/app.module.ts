import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule }    from '@angular/common/http';

import { MyPetsModule } from './modules/my-pets/my-pets.module';
import { NewPetModule } from './modules/new-pet/new-pet.module';
import { SuccessModule } from './modules/success/success.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MyPetsModule,
    NewPetModule,
    SuccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
