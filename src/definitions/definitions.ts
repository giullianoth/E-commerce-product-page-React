import { CategoryInterface } from "./categories"
import { MenuInterface } from "./menu"
import { ProductInterface } from "./product"

export const categories: CategoryInterface[] = [
    {
        category: "Collections",
        url: "#",
        subcategories: [
            {
                category: "Collections Category 1",
                url: "#"
            },
            {
                category: "Collections Category 2",
                url: "#"
            },
            {
                category: "Collections Category 3",
                url: "#"
            },
            {
                category: "Collections Category 4",
                url: "#"
            },
            {
                category: "Collections Category 5",
                url: "#"
            },
        ]
    },
    {
        category: "Men",
        url: "#",
        subcategories: [
            {
                category: "Men Category 1",
                url: "#"
            },
            {
                category: "Men Category 2",
                url: "#"
            },
            {
                category: "Men Category 3",
                url: "#"
            },
            {
                category: "Men Category 4",
                url: "#"
            },
            {
                category: "Men Category 5",
                url: "#"
            },
        ]
    },
    {
        category: "Women",
        url: "#",
        subcategories: [
            {
                category: "Women Category 1",
                url: "#"
            },
            {
                category: "Women Category 2",
                url: "#"
            },
            {
                category: "Women Category 3",
                url: "#"
            },
            {
                category: "Women Category 4",
                url: "#"
            },
            {
                category: "Women Category 5",
                url: "#"
            },
        ]
    },
]

export const menu: MenuInterface[] = [
    ...categories.map(category => {
        return {
            menu: category.category,
            url: category.url,
            submenu: category.subcategories?.map(category => {
                return {
                    menu: category.category,
                    url: category.url
                }
            })
        }
    }),
    {
        menu: "About",
        url: "#"
    },
    {
        menu: "Contact",
        url: "#"
    },
]

export const product: ProductInterface = {
    brand: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    images: [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg"
    ],
    thumbnails: [
        "image-product-1-thumbnail.jpg",
        "image-product-2-thumbnail.jpg",
        "image-product-3-thumbnail.jpg",
        "image-product-4-thumbnail.jpg"
    ]
}