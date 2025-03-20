import { useRef } from "react"
import styles from "./Header.module.css"
import Container from "../../common/Container"
import iconMenu from "../../../assets/images/icon-menu.svg"
import iconClose from "../../../assets/images/icon-close.svg"
import logo from "../../../assets/images/logo.svg"
import iconCart from "../../../assets/images/icon-cart.svg"
import avatar from "../../../assets/images/image-avatar.png"

const Header = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null)

  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <nav className={styles.header__navigation}>
          <div className={styles.header__menuIcon}>
            <img src={iconMenu} alt="Menu Icon" />
          </div>

          <div
            ref={overlayRef}
            className={styles.header__overlay}>
            <div className={styles.header__menuContainer}>
              <ul className={styles.header__menu}>

              </ul>
            </div>
          </div>
        </nav>

        <div className={styles.header__logo}>
          <h1>Sneakers</h1>

          <a href="#">
            <img src={logo} alt="Sneakers" />
          </a>
        </div>

        <div className={styles.header__profile}>
          <div className={styles.header__cart}>
            <button className="simple-link">
              <img src={iconCart} alt="Cart" />
              <span className={styles.header__cartQt}>1</span>
            </button>
          </div>

          <div className={styles.header__account}>
            <a href="#">
              <img src={avatar} alt="Avatar" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header