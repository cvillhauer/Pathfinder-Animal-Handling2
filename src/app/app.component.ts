import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { AbilityScores } from './model/abilityscores';
import { Alignment } from './model/alignment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  roundCount: number;

  ngOnInit() {
    this.roundCount = 1;
    const nirwe: Character = new Character('nirwe', 'Aldamirnirwa', Alignment.trueNeutral,
      'Druid', 7, new AbilityScores(12, 16, 13, 12, 16, 8));
    nirwe.feats.push('Augmented Summoning');
    nirwe.feats.push('Superior Summoning');
    this.characters.push(nirwe);
    const hekda: Character = new Character('hekda', 'Hekda', Alignment.chaoticGood,
      'Witch', 7, new AbilityScores(9, 15, 14, 19, 14, 8));
    this.characters.push(hekda);
    const richard: Character = new Character('richard', 'Richard', Alignment.lawfulEvil,
      'Wizard', 20, new AbilityScores(10, 14, 13, 20, 12, 10));
    this.characters.push(richard);
    const elzaphir: Character = new Character('elzaphir', 'Elzaphir', Alignment.chaoticGood,
      'Sorcerer', 16, new AbilityScores(9, 15, 11, 14, 12, 24));
    this.characters.push(elzaphir);
    const ivanus: Character = new Character('ivanus', 'Ivanus', Alignment.neutralGood,
      'Ranger', 7, new AbilityScores(14, 16, 16, 10, 14, 8));
    this.characters.push(ivanus);
    const silvermane: Character = new Character('silvermane', 'Silvermane', Alignment.neutralGood,
      'Druid', 20, new AbilityScores(12, 16, 14, 12, 20, 10));
    this.characters.push(silvermane);
  }

  nextRound() {
    this.roundCount++;
    this.characters.forEach(c => {
      for (let i = c.summonedCreatures.length - 1; i >= 0; i--) {
        const creature = c.summonedCreatures[i];
        creature.roundsLeft--;
        if (creature.roundsLeft <= 0) {
          console.log(creature.creatureName + ' is out of rounds.');
          c.summonedCreatures.splice(i, 1);
        }
      }
    });
  }

}
