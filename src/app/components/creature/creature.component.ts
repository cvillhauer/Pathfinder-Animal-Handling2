import { Component, OnInit } from '@angular/core';

import { Creature } from 'src/app/model/creature';
import { CreatureService } from '../../services/creature.service';

@Component({
  selector: 'creature',
  templateUrl: './creature.component.html'
})
export class CreatureComponent implements OnInit {
  title = 'Pathfinder-Animal-Handling2';
  creatures: Creature[] = [];
  creature: Creature;

  constructor(private creatureService: CreatureService) {

  }

  ngOnInit() {
    this.showCreatures();
  }

  showCreatures() {
    this.creatureService.getCreatures().subscribe(creatures => {
      this.creatures = creatures;
    });
  }
}
