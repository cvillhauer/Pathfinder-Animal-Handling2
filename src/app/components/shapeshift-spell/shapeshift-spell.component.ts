import { Component, OnInit, Input } from '@angular/core';

import { ShapeshiftSpell } from 'src/app/model/spell';
import { Character } from 'src/app/model/character';
import { ShapeshiftOption } from 'src/app/model/shapeshiftOption';
import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'shapeshift-spell',
  templateUrl: './shapeshift-spell.component.html'
})
export class ShapeshiftSpellComponent implements OnInit {
  @Input() spell: ShapeshiftSpell;
  @Input() castingCharacter: Character;
  @Input() roundCount: number;
  selectedOption: ShapeshiftOption;
  selectedCreature: Creature;

  constructor(private creatureService: CreatureService) {
  }

  ngOnInit() {

  }

  optionChange() {
    this.spell.creatures = [];
    this.getSpellCreatures(this.selectedOption);
  }

  getSpellCreatures(shapeshiftOption: ShapeshiftOption) {
    this.spell.creatures = [];
    let possibleValidCreatures = [];
    if (shapeshiftOption) {
      this.creatureService.getCreatures().subscribe(creatures => {
        possibleValidCreatures = creatures;
        for (const creature of possibleValidCreatures) {
          if (creature.size === shapeshiftOption.size && creature.type === shapeshiftOption.creatureType) {
            this.spell.creatures.push(creature);
          }
        }
      });
    }
  }

  onShapeshift() {
    console.log('Shifting into a ' + this.selectedCreature.description);
  }
}
