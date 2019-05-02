import { Component, OnInit } from '@angular/core';

import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pathfinder-Animal-Handling2';
  creatures: Creature[] = [];

  constructor(private creatureService: CreatureService) {

  }

  ngOnInit() {
    this.showCreatures();
  }

  showCreatures() {
    this.creatureService.getCreatures();
  }
}
