import { MouseEvent } from "react"
import { MenuInterface } from "../../../definitions/menu"
import styles from "./MenuItem.module.css"
import AnimateHeight from "react-animate-height"

export interface MenuItemProps {
  menuItem: MenuInterface
  index?: number
  menuItemClassName?: string
  submenuItemClassName?: string
  submenuToOpen?: number | null
  openSubmenu?: Function
}

const MenuItem = ({ menuItem, index, menuItemClassName, submenuItemClassName, submenuToOpen, openSubmenu }: MenuItemProps) => {
  const { menu, url, submenu } = menuItem

  const handleOpenSubmenu = (event: MouseEvent) => {
    if (submenu) {
      event.preventDefault()

      if (index === submenuToOpen) {
        openSubmenu && openSubmenu(null)
      } else {
        openSubmenu && openSubmenu(index)
      }
    }
  }

  return (
    <li className={menuItemClassName}>
      <a href={url} onClick={handleOpenSubmenu}>{menu}</a>

      {submenu &&
        <AnimateHeight
          id={`submenu-${index! + 1}`}
          duration={300}
          height={submenuToOpen! === index ? "auto" : 0}
          className={styles.submenu__dropdown}>
          <ul className={styles.submenu}>
            {submenu.map((subitem, submenuIndex) => (
              <MenuItem
                key={`submenu-item-${index! + 1}-${submenuIndex + 1}`}
                menuItem={subitem}
                menuItemClassName={submenuItemClassName} />
            ))}
          </ul>
        </AnimateHeight>}
    </li>
  )
}

export default MenuItem