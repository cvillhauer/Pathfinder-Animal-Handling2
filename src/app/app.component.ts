import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  characterName: string = "Courtney";
  characterClass: string = "Druid";
  characterLevel: number = 6;
  editName: boolean = false;

  toggleEditCharacterName() {
    this.editName = !this.editName;
  }
}
