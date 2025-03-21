import AnimateHeight from "react-animate-height"
import { cartItemInterface } from "../../../definitions/cartItem"
import CartItem from "../CartItem"
import styles from "./Cart.module.css"

export interface CartProps {
  cartItems: cartItemInterface[]
  openCart: boolean
  deleteItem: Function
}

const Cart = ({ cartItems, openCart, deleteItem }: CartProps) => {
  return (
    <AnimateHeight
    id="cart"
    duration={300}
    height={openCart ? "auto" : 0}
    className={styles.cart__dropdown}>
      <section className={styles.cart}>
        <header className={styles.cart__title}>
          <h2>Cart</h2>
        </header>

        <div className={styles.cart__container}>
          {cartItems.length
            ? <div className={styles.cart__list}>
              {cartItems.map((item, index) => (
                <CartItem
                  key={`cart-item-${index + 1}`}
                  item={item}
                  deleteItem={deleteItem} />
              ))}
            </div>

            : <p className={styles.cart__empty}>Your cart is empty.</p>}
        </div>

        {cartItems.length > 0 &&
          <div className={styles.cart__checkout}>
            <a href="#" className="button">Checkout</a>
          </div>}
      </section>
    </AnimateHeight>
  )
}

export default Cart