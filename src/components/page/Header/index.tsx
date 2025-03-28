import { useRef, useState } from "react"
import styles from "./Header.module.css"
import Container from "../../common/Container"
import iconMenu from "../../../assets/images/icon-menu.svg"
import iconClose from "../../../assets/images/icon-close.svg"
import logo from "../../../assets/images/logo.svg"
import iconCart from "../../../assets/images/icon-cart.svg"
import avatar from "../../../assets/images/image-avatar.png"
import MenuItem from "../../common/MenuItem"
import { menu } from "../../../definitions/definitions"
import Cart from "../../common/Cart"
import { cartItemInterface } from "../../../definitions/cartItem"

export interface HeaderProps {
  cartItems: cartItemInterface[]
  deleteCartItem: Function
}

const Header = ({ cartItems, deleteCartItem }: HeaderProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [submenuToOpen, setSubmenuToOpen] = useState<number | null>(null)
  const [scrolling, setScrolling] = useState(window.scrollY > 0)
  const [openCart, setOpenCart] = useState(false)

  window.addEventListener("scroll", () => setScrolling(window.scrollY > 0))

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    setOpenCart(false)
  }

  const handleOpenSubmenu = (submenuIndex: number | null) => {
    setSubmenuToOpen(submenuIndex)
    setOpenCart(false)
  }

  const handleOpenCart = () => {
    setOpenCart(!openCart)
    setSubmenuToOpen(null)
  }

  return (
    <header className={styles.header + (scrolling ? ` ${styles.scrolling}` : "")}>
      <Container className={styles.header__container}>
        <div className={styles.header__navigation}>
          <nav>
            <div className={styles.header__menuIcon} onClick={handleOpenMenu}>
              <img src={openMenu ? iconClose : iconMenu} alt="Menu Icon" />
            </div>

            <div
              ref={overlayRef}
              className={styles.header__overlay + (openMenu ? ` ${styles.open}` : "") + " close"}
              onClick={({ target }) => target === overlayRef.current && handleOpenMenu()}>
              <div className={styles.header__menuContainer}>
                <ul className={styles.header__menu}>
                  {menu.map((item, index) => (
                    <MenuItem
                      key={`menu-item-${index + 1}`}
                      index={index}
                      menuItem={item}
                      menuItemClassName={styles.header__menuItem}
                      submenuItemClassName={styles.header__submenuItem}
                      submenuToOpen={submenuToOpen}
                      openSubmenu={handleOpenSubmenu} />
                  ))}
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
        </div>

        <div className={styles.header__profile}>
          <div className={styles.header__cart}>
            <button className="simple-link" onClick={handleOpenCart}>
              <img src={iconCart} alt="Cart" />

              {cartItems.length > 0 &&
                <span className={styles.header__cartQt}>
                  {cartItems.length}
                </span>}
            </button>

            <Cart
              cartItems={cartItems}
              openCart={openCart}
              deleteItem={deleteCartItem} />
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