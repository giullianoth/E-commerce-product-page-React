import { useState } from "react"
import { product } from "../../../definitions/definitions"
import styles from "./Product.module.css"
import Container from "../../common/Container"
import Gallery from "../../common/Gallery"

const Product = () => {
  const { brand, name, description, price, discount, images, thumbnails } = product
  const [featured, setFeatured] = useState(0)

  const changeImage = (imageIndex: number) => setFeatured(imageIndex)

  return (
    <section className={styles.product}>
      <Container className={styles.product__container}>
        <Gallery
          name={name}
          images={images}
          thumbnails={thumbnails}
          featured={featured}
          changeImage={changeImage} />
      </Container>
    </section>
  )
}

export default Product