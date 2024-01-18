import { memo, useState } from "react";
import { observer } from "mobx-react-lite"
import observableCartStore from './store';


const Main = () => {
  console.log('<Main />');
  return (
    <div>
      <Product />
    </div>
  )
}

export const Product = () => {
  console.log('<Product />');
  return (
    <div>
      <button onClick={() => {
        observableCartStore.addCart()
      }}>Add to cart</button>
    </div >
  )
}

const NavBar = () => {
  console.log('<NavBar />');

  return (
    <div>
      <Cart />
    </div>
  )
}

const Cart = observer(() => {
  console.log('<Cart />');

  return (
    <div>Cart: {JSON.stringify(observableCartStore.data)}</div>
  )
})

const Mall = observer(() => {
  return (
    <div>
      <Main />
      <NavBar />
    </div>
  )
})

export default Mall;