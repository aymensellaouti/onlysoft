import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent implements OnInit {
  couleur = 'blue';
  taille = '24px';
  font = 'garamond';
  number = 2125545.12345;
  isEteinte = true;
  polices = [
    'verdana', 'garamond', 'arial', 'times new roman'
  ];
  constructor() { }

  ngOnInit() {
  }
  changerFont(myFont) {
    this.font = myFont;
  }
  changeSize(taille) {
    this.taille = taille + 'px';
  }
}
