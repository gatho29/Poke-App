import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNellLibraryComponent } from './ngx-nell-library.component';

describe('NgxNellLibraryComponent', () => {
  let component: NgxNellLibraryComponent;
  let fixture: ComponentFixture<NgxNellLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNellLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNellLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
