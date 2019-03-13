import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectFils = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectionnerFils() {
     this.selectFils.emit(this.personne);
  }
}
