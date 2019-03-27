import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'teacher', 'as.jpg'),
      new Personne(2, 'sellaouti 2', 'aymen 2', 37, 'teacher', 'as.jpg'),
      new Personne(2, 'ben dhiaf', 'zouhour', 37, 'teacher of aymen', '')
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
