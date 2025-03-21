import { useState } from "react"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Product from "./components/page/Product"
import { cartItemInterface } from "./definitions/cartItem"
import { ProductInterface } from "./definitions/product"

function App() {
  const [cartItems, setCartItems] = useState<cartItemInterface[]>([])

  const deleteCartItem = (itemId: number) => {
    const sanitizedItems = cartItems.filter(item => item.id !== itemId)
    setCartItems(sanitizedItems)
  }

  const addToCart = (product: ProductInterface, quantity: number) => {
    const newItems = [
      ...cartItems,
      {
        id: cartItems.length ? cartItems[cartItems.length - 1].id + 1 : 1,
        product: product,
        quantity: quantity
      }
    ]

    setCartItems(newItems)
  }

  return (
    <>
      <Header cartItems={cartItems} deleteCartItem={deleteCartItem} />
      <main>
        <Product addProductToCart={addToCart} />
      </main>
      <Footer />
    </>
  )
}

export default App
