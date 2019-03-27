import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() sendFils = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }
  processFils(personne: Personne ) {
    this.sendFils.emit(personne);
  }

}
