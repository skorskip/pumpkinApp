import { Component, OnInit } from '@angular/core';
import { PetDataObject } from '../../services/pet-data/pet-data-object';
import { PetDataService } from 'src/app/services/pet-data/pet-data.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  pet = new PetDataObject();
  constructor(
    private petDataService: PetDataService
  ) { }

  ngOnInit() {
    //get last added pet cached in pet service
    this.pet = this.petDataService.recentlyAdded;
  }

}
