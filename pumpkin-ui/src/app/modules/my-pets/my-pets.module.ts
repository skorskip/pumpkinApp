import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPetsComponent } from './my-pets.component';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { PetAttributeComponent } from '../../components/pet-attribute/pet-attribute.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    MyPetsComponent,
    PetCardComponent,
    PetAttributeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    ],
  exports: [
    MyPetsComponent
  ]
})
export class MyPetsModule { }
