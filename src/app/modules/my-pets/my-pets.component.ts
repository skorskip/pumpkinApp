import { Component, OnInit } from '@angular/core';
import { PetDataService } from 'src/app/services/pet-data/pet-data.service';
import { PetDataObject } from 'src/app/services/pet-data/pet-data-object';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  pets = [] as PetDataObject[];

  constructor(
   private petDataService: PetDataService
  ) { }

  ngOnInit() {
    this.getPetData();
  }

  getPetData() {
    this.petDataService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }
}