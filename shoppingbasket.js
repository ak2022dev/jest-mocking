// File: shoppingbasket.js

class ShoppingBasket {
  constructor() {
    this.basket = []
  }
  getTotalPrice() {
    if (this.basket.length === 0) {
      return 0;
    }
  }
}

module.exports = ShoppingBasket;
