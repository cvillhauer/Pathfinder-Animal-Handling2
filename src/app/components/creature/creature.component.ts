import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Creature } from 'src/app/model/creature';

@Component({
  selector: 'creature',
  templateUrl: './creature.component.html'
})
export class CreatureComponent implements OnInit {
  creatures: Creature[];
  @Input() creature: Creature;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  onDelete() {
    console.log('Button push');
    this.delete.emit();
  }
}
