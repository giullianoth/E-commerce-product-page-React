export interface ProductInterface {
    brand: string
    name: string
    description: string
    price: number
    discount?: number
    images: string[]
    thumbnails: string[]
}