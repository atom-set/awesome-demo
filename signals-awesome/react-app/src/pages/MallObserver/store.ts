import { makeObservable, observable, action } from "mobx"

class ObservableCartStore {
  data: Array<string> = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      addCart: action,
    });
  }


  addCart() {
    this.data.push('product');
  }
}

const observableCartStore = new ObservableCartStore();

export default observableCartStore