export default class Store {
  store = {};
  get state() {
    return this.store;
  }
  set state(state) {
    const _this = this;
    this.store = [..._this.store, ...state];
  }
  subscribe = (Obj) => {
    Object.keys(Obj.initialState).forEach((key) => {
      this.state[key] = Obj.initialState[key];
    });
    Obj.prototype.state = this.state;
  };
}
