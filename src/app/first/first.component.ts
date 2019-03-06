import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color = 'red';
  constructor() { }

  ngOnInit() {
  }
  changeColor(couleur) {
    this.color = couleur;
  }
}
