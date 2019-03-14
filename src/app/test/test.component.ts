import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  personnes: Personne[];
  constructor() { }
  ngOnInit() {
   this.personnes = [
     new Personne(),
     new Personne()
   ];
  }
  addPersonne() {
    const personne = new Personne();
    this.personnes.push(personne);
  }
}
