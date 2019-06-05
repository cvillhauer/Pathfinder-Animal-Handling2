import { Component, Input } from '@angular/core';
import { Attack } from 'src/app/model/attack';

@Component({
  selector: 'attack',
  templateUrl: './attack.component.html'
})
export class AttackComponent {
  @Input() attack: Attack;

  constructor() {
  }

}
