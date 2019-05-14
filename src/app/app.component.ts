import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { AbilityScores } from './model/abilityscores';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];

  ngOnInit() {
    const courtney: Character = new Character('courtney', 'Courtney', 'Druid', 6, new AbilityScores(12, 16, 13, 12, 16, 8));
    courtney.feats.push('Augmented Summoning');
    const richard: Character = new Character('richard', 'Richard', 'Wizard', 1, new AbilityScores(10, 14, 13, 18, 12, 10));
    this.characters.push(courtney);
    this.characters.push(richard);
  }

}
