import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Creature } from 'src/app/model/creature';

@Component({
  selector: 'creature',
  templateUrl: './creature.component.html'
})
export class CreatureComponent implements OnInit {
  @Input() creature: Creature;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  onDelete() {
    this.delete.emit();
  }
}
