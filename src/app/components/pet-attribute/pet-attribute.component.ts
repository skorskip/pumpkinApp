import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pet-attribute',
  templateUrl: './pet-attribute.component.html',
  styleUrls: ['./pet-attribute.component.css']
})
export class PetAttributeComponent implements OnInit {
  @Input() icon = '';
  @Input() label = '';
  @Input() content = ''
  constructor() { }

  ngOnInit() {
  }

}
