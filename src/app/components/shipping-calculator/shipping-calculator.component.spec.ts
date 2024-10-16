import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCalculatorComponent } from './shipping-calculator.component';

describe('ShippingCalculatorComponent', () => {
  let component: ShippingCalculatorComponent;
  let fixture: ComponentFixture<ShippingCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
