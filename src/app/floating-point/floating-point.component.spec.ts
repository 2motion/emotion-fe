import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPointComponent } from './floating-point.component';

describe('FloatingPointComponent', () => {
  let component: FloatingPointComponent;
  let fixture: ComponentFixture<FloatingPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
