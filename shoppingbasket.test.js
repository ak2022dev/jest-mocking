// File: shoppingbasket.test.js

const ShoppingBasket = require('./shoppingbasket');
const marsDouble = { getPrice: () => 4.99 }
const skittleDouble = { getPrice: () => 3.99 }

describe('ShoppingBasket', () => {
  it('Has a zero total price when first created', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
  it('Returns the price of a single object when only one in basket', () => {
    let basket = new ShoppingBasket();
    basket.addItem( marsDouble );
    expect(basket.getTotalPrice()).toBe(marsDouble.getPrice());
  });
  it('Returns the price of the prices of multiple objects in basket', () => {
    let basket = new ShoppingBasket();
    basket.addItem( skittleDouble );
    basket.addItem( skittleDouble );
    expect(basket.getTotalPrice()).toBe((skittleDouble.getPrice())+(skittleDouble.getPrice()));
  });
});
