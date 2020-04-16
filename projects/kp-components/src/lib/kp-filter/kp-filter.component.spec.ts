import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpFilterComponent } from './kp-filter.component';

describe('KpFilterComponent', () => {
  let component: KpFilterComponent;
  let fixture: ComponentFixture<KpFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
