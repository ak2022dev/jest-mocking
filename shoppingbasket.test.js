// File: shoppingbasket.test.js

const ShoppingBasket = require('./shoppingbasket');

describe('ShoppingBasket', () => {
  it('Has a zero total price when first created', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
});
