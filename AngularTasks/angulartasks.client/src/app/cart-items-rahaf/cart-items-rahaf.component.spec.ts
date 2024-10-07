import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsRAHAFComponent } from './cart-items-rahaf.component';

describe('CartItemsRAHAFComponent', () => {
  let component: CartItemsRAHAFComponent;
  let fixture: ComponentFixture<CartItemsRAHAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemsRAHAFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemsRAHAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
