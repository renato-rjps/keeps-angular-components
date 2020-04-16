import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpComponentsComponent } from './kp-components.component';

describe('KpComponentsComponent', () => {
  let component: KpComponentsComponent;
  let fixture: ComponentFixture<KpComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
