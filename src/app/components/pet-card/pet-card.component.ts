import { Component, OnInit, Input } from '@angular/core';
import { PetDataObject } from 'src/app/services/pet-data/pet-data-object';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet = new PetDataObject();

  constructor() { }

  ngOnInit() {
  }

}
