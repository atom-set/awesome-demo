import { signal, computed } from "@preact/signals";

const cart = signal([]);

const Main = () => {
  console.log('<Main />');
  return (
    <div>
      <Product />
    </div>
  )
}

const Product = () => {
  console.log('<Product />');
  return (
    <div>
      <button onClick={() => {
        const prevCart = cart.value;
        cart.value = [...prevCart, 'product'];
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
    <div>Cart: {JSON.stringify(cart.value)}</div>
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