export default class Basket {
  static initialState = {
    basket: [],
  };
  set basket(pks) {
    this.state.basket = [...pks];
  }
  deleteItems(pks) {
    this.state.basket = this.state.basket.filter((pk) => !pks.includes(pk));
  }
}
