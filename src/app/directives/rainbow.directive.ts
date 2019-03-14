import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  couleurs = [
    'yellow',
    'blue',
    'lightblue',
    'lightgreen',
    'gold',
    'pink',
    'purple',
    'lightgray'
  ];
  @HostBinding('style.borderColor') bc ;
  @HostBinding('style.color') color ;
  constructor() { }
  @HostListener('keyup') changeColor() {
    const index = Math.floor(Math.random() * (this.couleurs.length - 1));
    this.bc = this.couleurs[index];
    this.color = this.couleurs[index];
  }
}
