import { memo, useState } from "react";

const Main = memo(({ setCart }: any) => {
  console.log('<Main />');

  return (
    <div>
      <Product setCart={setCart} />
    </div>
  )
})

export const Product = memo(({ setCart }: any) => {
  console.log('<Product />');
  return (
    <div>
      <button onClick={() => {
        setCart((cart: any) => [...cart, `product`])
      }}>Add to cart</button>
    </div >
  )
})

const NavBar = memo(({ cart }: any) => {
  console.log('<NavBar />');

  return (
    <div>
      <Cart cart={cart} />
    </div>
  )
})

const Cart = memo(({ cart }: any) => {
  console.log('<Cart />');

  return (
    <div>Cart: {JSON.stringify(cart)}</div>
  )
})


export default function Mall() {
  console.log('<Mall />');

  const [cart, setCart] = useState([]);

  return (
    <div>
      <Main setCart={setCart} />
      <NavBar cart={cart} />
    </div>
  )
}
