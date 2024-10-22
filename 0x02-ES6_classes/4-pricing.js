import Currency from "./3-currency"

export default class Pricing {
  constructor(amount: int, currency: currency) {
    this._amount = amount;
    this.currency = currency;
  }

   get amount() {
     return this._amount;
   }

  set amount(value) {
    return this._amount = value;
  }
}
