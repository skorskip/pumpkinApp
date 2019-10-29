import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPetsComponent } from './modules/my-pets/my-pets.component';
import { SuccessComponent } from './modules/success/success.component';
import { NewPetComponent } from './modules/new-pet/new-pet.component';


const routes: Routes = [
  { path: '', redirectTo: '/my-pets', pathMatch: 'full' },
  { path: 'my-pets', component: MyPetsComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'pets/success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
