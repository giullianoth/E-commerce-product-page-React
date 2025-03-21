import { cartItemInterface } from "../../../definitions/cartItem"
import styles from "./CartItem.module.css"
import iconDelete from "../../../assets/images/icon-delete.svg"

export interface CartItemProps {
    item: cartItemInterface
    deleteItem: Function
}

const CartItem = ({ item, deleteItem }: CartItemProps) => {
    const { id, quantity, product } = item
    const { name, thumbnails } = product
    const imagePath = "/images/"


    const priceWithDiscount = (price: number, discount: number) => price - (price * (discount / 100))
    const unitPrice = item.product.discount ? priceWithDiscount(item.product.price, item.product.discount) : item.product.price
    const totalPrice = (item.product.discount ? priceWithDiscount(item.product.price, item.product.discount) : item.product.price) * item.quantity

    const currency = (value: number) => new Intl.NumberFormat(
        "en-US",
        { style: "currency", currency: "USD" }
    ).format(value)

    return (
        <article className={styles.cartItem}>
            <div className={styles.cartItem__thumb}>
                <img src={imagePath + thumbnails[0]} alt={name} />
            </div>

            <header className={styles.cartItem__info}>
                <h3>{name}</h3>
                <p>{currency(unitPrice)} X {quantity} <strong>{currency(totalPrice)}</strong></p>
            </header>

            <div className={styles.cartItem__delete}>
                <button className="simple-link" title="Delete this item" onClick={() => deleteItem(id)}>
                    <img src={iconDelete} alt="Delete" />
                </button>
            </div>
        </article>
    )
}

export default CartItem