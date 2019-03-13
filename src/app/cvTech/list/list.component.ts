import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() sendFils = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'teacher', 'as.jpg'),
      new Personne(2, 'sellaouti 2', 'aymen 2', 37, 'teacher', 'as.jpg')
    ];
  }
  processFils(personne: Personne ) {
    this.sendFils.emit(personne);
  }

}
