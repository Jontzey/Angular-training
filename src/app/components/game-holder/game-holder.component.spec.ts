import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHolderComponent } from './game-holder.component';

describe('GameHolderComponent', () => {
  let component: GameHolderComponent;
  let fixture: ComponentFixture<GameHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameHolderComponent]
    });
    fixture = TestBed.createComponent(GameHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
