import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherspageComponent } from './otherspage.component';

describe('OtherspageComponent', () => {
  let component: OtherspageComponent;
  let fixture: ComponentFixture<OtherspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
