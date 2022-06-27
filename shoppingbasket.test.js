// File: shoppingbasket.test.js

const ShoppingBasket = require('./shoppingbasket');
const candyDouble = { getPrice: () => 3.99 }

describe('ShoppingBasket', () => {
  it('Has a zero total price when first created', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
  it('Returns the price of a single object when only one in basket', () => {
    let basket = new ShoppingBasket();
    basket.addItem( candyDouble );
    expect(basket.getTotalPrice()).toBe(candyDouble.getPrice());
  });
});
