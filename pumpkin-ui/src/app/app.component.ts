import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pumpkinApp';

  constructor(
    private router:Router,
  ){}

  ngOnInit(){}

  addPet() {
    this.router.navigate(['/pets/new']);
  }

  myPets() {
    this.router.navigate(['/my-pets']);
  }
}
