import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatureComponent } from './creature.component';
import { FormsModule } from '@angular/forms';
import { AttackComponent } from '../attack/attack.component';
import { InGameModifiersComponent } from '../in-game-modifiers/in-game-modifiers.component';

describe('CreatureComponent', () => {
  let component: CreatureComponent;
  let fixture: ComponentFixture<CreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatureComponent, AttackComponent, InGameModifiersComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDelete should return void', () => {
    expect(component.onDelete()).toBeUndefined();
  });
});
