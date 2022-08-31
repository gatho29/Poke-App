import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmTopbarComponent } from './pkm-topbar.component';

describe('PkmTopbarComponent', () => {
  let component: PkmTopbarComponent;
  let fixture: ComponentFixture<PkmTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
