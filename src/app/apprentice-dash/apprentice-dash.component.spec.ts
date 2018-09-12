import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeDashComponent } from './apprentice-dash.component';

describe('ApprenticeDashComponent', () => {
  let component: ApprenticeDashComponent;
  let fixture: ComponentFixture<ApprenticeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
