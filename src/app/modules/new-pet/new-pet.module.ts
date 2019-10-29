import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPetComponent } from './new-pet.component';
import { MaterialModule } from '../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NewPetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NewPetComponent
  ]
})
export class NewPetModule { }
