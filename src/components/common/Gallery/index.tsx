import styles from "./Gallery.module.css"
import iconPrevious from "../../../assets/images/icon-previous.svg"
import iconNext from "../../../assets/images/icon-next.svg"
import Modal from "react-modal"
import { useState } from "react"

Modal.setAppElement("#root")

export interface GalleryProps {
    name: string
    images: string[]
    thumbnails: string[]
    featured: number
    changeImage: Function
    inModal?: boolean
}

const Gallery = ({ name, images, thumbnails, featured, changeImage, inModal }: GalleryProps) => {
    const imagePath = "/images/"
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => !inModal && setModalIsOpen(!modalIsOpen)

    const navigateThroughImages = (mode: string) => {
        if (mode === "previous") {
            changeImage(featured === 0 ? images.length - 1 : featured - 1)
        }

        if (mode === "next") {
            changeImage(featured === images.length - 1 ? 0 : featured + 1)
        }
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__featured}>
                <div className={styles.gallery__navigation}>
                    <button
                        className={`${styles.gallery__navigationButton} ${styles.previous}`}
                        onClick={() => navigateThroughImages("previous")}>
                        <img src={iconPrevious} alt="Previous" />
                    </button>

                    <button
                        className={`${styles.gallery__navigationButton} ${styles.next}`}
                        onClick={() => navigateThroughImages("next")}>
                        <img src={iconNext} alt="Next" />
                    </button>
                </div>

                <img src={imagePath + images[featured]} alt={name} title="Click to expand" onClick={openModal} />
            </div>

            <div className={styles.gallery__thumbnails}>
                {thumbnails.map((thumbnail, index) => (
                    <div
                        key={`thumbnail-${index + 1}`}
                        className={styles.gallery__thumbnail + (featured === index ? ` ${styles.active}` : "")}
                        onClick={() => changeImage(index)}>
                        <img src={imagePath + thumbnail} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={openModal}
                overlayClassName={styles.gallery__modalOverlay}
                className={styles.gallery__modalContent}>
                <Gallery
                    name={name}
                    images={images}
                    thumbnails={thumbnails}
                    featured={featured}
                    changeImage={changeImage}
                    inModal />
            </Modal>
        </div>
    )
}

export default Gallery