import { Component, Input, OnInit } from '@angular/core';

import { Character } from 'src/app/model/character';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.characters);
  }

}
