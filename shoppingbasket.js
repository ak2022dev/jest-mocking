// File: shoppingbasket.js

class ShoppingBasket {

  constructor() {
    this.basket = []
  }

  addItem( item ) {
    this.basket.push( item );
  }

  getTotalPrice() {
    if (this.basket.length === 0) {
      return 0;
    }
    else {
      let total = 0;
      this.basket.forEach( (item) => { total += item.getPrice(); } );
      return total;
    }
  }

}

module.exports = ShoppingBasket;
