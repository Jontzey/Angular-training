import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendGamesComponent } from './recommend-games.component';

describe('RecommendGamesComponent', () => {
  let component: RecommendGamesComponent;
  let fixture: ComponentFixture<RecommendGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendGamesComponent]
    });
    fixture = TestBed.createComponent(RecommendGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
