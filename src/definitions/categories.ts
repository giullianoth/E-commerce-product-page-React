export interface CategoryInterface {
    category: string
    url: string
    subcategories?: CategoryInterface[]
}