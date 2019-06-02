import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { AbilityScores } from './model/abilityscores';
import { Alignment } from './model/enums';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];

  ngOnInit() {
    const nirwe: Character = new Character('nirwe', 'Aldamirnirwa', Alignment.trueNeutral, 'Druid', 6, new AbilityScores(12, 16, 13, 12, 16, 8));
    nirwe.feats.push('Augmented Summoning');
    this.characters.push(nirwe);
    const richard: Character = new Character('richard', 'Richard', Alignment.lawfulEvil, 'Wizard', 1, new AbilityScores(10, 14, 13, 18, 12, 10));
    this.characters.push(richard);
    const elzaphir: Character = new Character('elzaphir', 'Elzaphir', Alignment.chaoticGood, 'Sorcerer', 16, new AbilityScores(9, 15, 11, 14, 12, 24));
    this.characters.push(elzaphir);
    const alton: Character = new Character('alton', 'Alton', Alignment.chaoticGood, 'Bard', 5, new AbilityScores(8, 14, 14, 14, 10, 20));
    this.characters.push(alton);
    const ivanus: Character = new Character('ivanus', 'Ivanus', Alignment.neutralGood, 'Ranger', 6, new AbilityScores(14, 16, 16, 10, 14, 8));
    this.characters.push(ivanus);
  }

}
