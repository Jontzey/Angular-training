import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTitelComponent } from './store-titel.component';

describe('StoreTitelComponent', () => {
  let component: StoreTitelComponent;
  let fixture: ComponentFixture<StoreTitelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreTitelComponent]
    });
    fixture = TestBed.createComponent(StoreTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
