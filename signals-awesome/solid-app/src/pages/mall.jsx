import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

const [cart, setCart] = createSignal([]);


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
        const prevCart = cart();
        setCart([...prevCart, 'product'])
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

const Cart = () => {
  console.log('<Cart />');
  return (
    <div>Cart: {JSON.stringify(cart())}</div>
  )
}

export default function Mall() {

  console.log('<Mall />');
  return (
    <div>
      <Main />
      <NavBar />
    </div>
  )
}
