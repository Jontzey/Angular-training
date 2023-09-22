import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchbarComponent } from './game-searchbar.component';

describe('GameSearchbarComponent', () => {
  let component: GameSearchbarComponent;
  let fixture: ComponentFixture<GameSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameSearchbarComponent]
    });
    fixture = TestBed.createComponent(GameSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
