import { Component, OnInit, Input } from '@angular/core';

import { Creature } from 'src/app/model/creature';
import { CreatureService } from '../../services/creature.service';

@Component({
  selector: 'creature',
  templateUrl: './creature.component.html'
})
export class CreatureComponent implements OnInit {
  creatures: Creature[];
  @Input() creature: Creature;

  constructor(private creatureService: CreatureService) {

  }

  ngOnInit() {
    // this.showCreatures();
  }

  showCreatures() {
    this.creatureService.getCreatures().subscribe(creatures => {
      this.creatures = creatures;
    });
  }
}
