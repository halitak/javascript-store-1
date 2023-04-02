export default class Header{
  static initialState={};
  get quantity(){
    return this.state.basket.length;
  }
}