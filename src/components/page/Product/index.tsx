import { useState } from "react"
import { product } from "../../../definitions/definitions"
import styles from "./Product.module.css"
import Container from "../../common/Container"
import Gallery from "../../common/Gallery"
import iconMinus from "../../../assets/images/icon-minus.svg"
import iconPlus from "../../../assets/images/icon-plus.svg"
import iconCart from "../../../assets/images/icon-cart-alt.svg"
import Confirm from "../../common/Confirm"

export interface PorductProps {
  addProductToCart: Function
}

const Product = ({ addProductToCart }: PorductProps) => {
  const { brand, name, description, price, discount, images, thumbnails } = product
  const [featured, setFeatured] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [confirm, setConfirm] = useState(false)

  const changeImage = (imageIndex: number) => setFeatured(imageIndex)

  const priceWithDiscount = (priceValue: number, discountValue: number) => priceValue - (priceValue * (discountValue / 100))

  const currency = (value: number) => new Intl.NumberFormat(
    "en-US",
    { style: "currency", currency: "USD" }
  ).format(value)

  const changeQuantity = (mode: string) => {
    if (mode === "minus") {
      setQuantity(quantity > 1 ? quantity - 1 : quantity)
    }

    if (mode === "plus") {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    addProductToCart(product, quantity)
    setConfirm(true)

    setTimeout(() => {
      setConfirm(false)
    }, 3000);
  }

  return (
    <section className={styles.product}>
      <Container className={styles.product__container}>
        <Gallery
          name={name}
          images={images}
          thumbnails={thumbnails}
          featured={featured}
          changeImage={changeImage} />

        <div className={styles.product__info}>
          <header className={styles.product__title}>
            <p className={styles.product__brand}>{brand}</p>

            <h1 className={styles.product__name}>{name}</h1>
          </header>

          <p className={styles.product__description}>{description}</p>

          <div className={styles.product__price}>
            <p className={styles.product__currentPrice}>
              <span className={styles.product__discountedPrice}>
                {discount ? currency(priceWithDiscount(price, discount!)) : currency(price)}
              </span>

              {discount &&
                <span className={styles.product__discount}>
                  {discount}%
                </span>}
            </p>

            {discount &&
              <p className={styles.product__actualPrice}>{currency(price)}</p>}
          </div>

          <div className={styles.product__actions}>
            <div className={styles.product__quantity}>
              <button
                className={`${styles.product__quantityButton} ${styles.product__quantityArea}  ${styles.minus}`}
                onClick={() => changeQuantity("minus")}>
                <img src={iconMinus} alt="Minus" />
              </button>

              <p className={styles.product__quantityArea}>
                {quantity}
              </p>

              <button
                className={`${styles.product__quantityButton} ${styles.product__quantityArea}  ${styles.plus}`}
                onClick={() => changeQuantity("plus")}>
                <img src={iconPlus} alt="Plus" />
              </button>
            </div>

            <div className={styles.product__purchase}>
              <button className="button" onClick={handleAddToCart}>
                <img src={iconCart} alt="Cart" />
                Add to cart
              </button>
            </div>

            {confirm && <Confirm />}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Product