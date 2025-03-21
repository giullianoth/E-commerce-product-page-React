import { useState } from "react"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Product from "./components/page/Product"
import { cartItemInterface } from "./definitions/cartItem"
import { product } from "./definitions/definitions"

function App() {
  const [cartItems, setCartItems] = useState<cartItemInterface[]>([
    {
      id: 1,
      product: product,
      quantity: 2
    }
  ])

  const deleteCartItem = (itemId: number) => {
    const sanitizedItems = cartItems.filter(item => item.id !== itemId)
    setCartItems(sanitizedItems)
  }

  return (
    <>
      <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
      <main>
        <Product />
      </main>
      <Footer />
    </>
  )
}

export default App
