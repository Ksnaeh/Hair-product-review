import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordpageComponent } from './changepasswordpage.component';

describe('ChangepasswordpageComponent', () => {
  let component: ChangepasswordpageComponent;
  let fixture: ComponentFixture<ChangepasswordpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
