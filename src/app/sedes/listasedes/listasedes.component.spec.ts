import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasedesComponent } from './listasedes.component';

describe('ListasedesComponent', () => {
  let component: ListasedesComponent;
  let fixture: ComponentFixture<ListasedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
