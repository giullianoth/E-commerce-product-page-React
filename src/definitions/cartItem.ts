import { ProductInterface } from "./product";

export interface cartItemInterface {
    id: number
    product: ProductInterface
    quantity: number
}