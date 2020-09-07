import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooComponent } from './shampoo.component';

describe('ShampooComponent', () => {
  let component: ShampooComponent;
  let fixture: ComponentFixture<ShampooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShampooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
