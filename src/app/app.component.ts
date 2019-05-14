import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];

  ngOnInit() {
    const courtney: Character = new Character('courtney', 'Courtney', 'Druid', 6);
    courtney.feats.push('Augmented Summoning');
    const richard: Character = new Character('richard', 'Richard', 'Wizard', 1);
    this.characters.push(courtney);
    this.characters.push(richard);
  }

}
