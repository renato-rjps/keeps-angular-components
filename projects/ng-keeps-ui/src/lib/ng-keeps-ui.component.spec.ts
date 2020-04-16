import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKeepsUiComponent } from './ng-keeps-ui.component';

describe('NgKeepsUiComponent', () => {
  let component: NgKeepsUiComponent;
  let fixture: ComponentFixture<NgKeepsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgKeepsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgKeepsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
