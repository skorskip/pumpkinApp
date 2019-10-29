import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { PetDataObject } from '../../services/pet-data/pet-data-object';
import { PetDataService } from 'src/app/services/pet-data/pet-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  petForm;

  constructor(
    private petDataService: PetDataService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.petForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        breed: new FormControl('', Validators.required),
        petType: new FormControl('', Validators.required),
        age: new FormControl(0, Validators.required),
        id: new FormControl(0, Validators.required)
      });
  }

  ngOnInit() {
  }

  submit(form) {
    if(form.petType != '' && form.name != '' && form.breed != '') {
      this.petDataService.addPet(form).subscribe((response) => {

        if(response) {
          this.router.navigate(['/pets/success']);
        }
      });
    }
  }

}
