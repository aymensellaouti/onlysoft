import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() color = 'red';
  @Output() sendData = new EventEmitter();
  show = true;
  constructor() { }

  ngOnInit() {
  }
  changeColor(couleur) {
    this.color = couleur;
  }
  allumer() {
    this.show = !this.show;
  }
  sendDataToPere() {
    this.sendData.emit(this.color);
  }
}
