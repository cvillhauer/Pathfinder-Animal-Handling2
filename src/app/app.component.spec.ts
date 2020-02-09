import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { SummonSpellComponent } from './components/summon-spell/summon-spell.component';
import { CreatureComponent } from './components/creature/creature.component';
import { HttpClientModule } from '@angular/common/http';
import { AttackComponent } from './components/attack/attack.component';
import { InGameModifiersComponent } from './components/in-game-modifiers/in-game-modifiers.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, HttpClientModule
      ],
      declarations: [
        AppComponent, AttackComponent, CharacterComponent, SummonSpellComponent, CreatureComponent, InGameModifiersComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ngOnInit should cover', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});
