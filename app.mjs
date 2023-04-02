import Store from './store.mjs';
import Basket from './basket.mjs';
import Checkout from './checkout.mjs';
import Header from './header.mjs';

const store = new Store();

store.subscribe(Basket);
store.subscribe(Checkout);
store.subscribe(Header);

const basket = new Basket();
const checkout = new Checkout();
const header = new Header();

basket.basket = [12,23,41,53];

console.log(basket.state);
console.log(header.quantity);

basket.deleteItems([12,23])

console.log(checkout.state);