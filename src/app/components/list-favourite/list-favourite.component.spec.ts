import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfavouriteComponent } from './list-favourite.component';

describe('ListfavouriteComponent', () => {
  let component: ListfavouriteComponent;
  let fixture: ComponentFixture<ListfavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
