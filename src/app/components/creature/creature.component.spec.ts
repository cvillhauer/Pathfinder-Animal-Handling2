import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatureComponent } from './creature.component';
import { FormsModule } from '@angular/forms';

describe('CreatureComponent', () => {
  let component: CreatureComponent;
  let fixture: ComponentFixture<CreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatureComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showCreatures should return void', () => {
    expect(component.showCreatures()).toBeUndefined();
  });
});
