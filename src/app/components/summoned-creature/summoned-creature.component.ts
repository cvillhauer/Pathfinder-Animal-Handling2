import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SummonedCreature } from 'src/app/model/summonedCreature';

@Component({
  selector: 'summoned-creature',
  templateUrl: './summoned-creature.component.html'
})
export class SummonedCreatureComponent implements OnInit {
  @Input() creature: SummonedCreature;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  onDelete() {
    this.delete.emit();
  }
}
