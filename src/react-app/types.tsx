export type CategoryCountMap = {
    'Sweaters': number,
    'Tops': number,
    'Outerwear': number,
    'Dresses': number,
    'Pants': number,
    'Shoes': number,
    'Accessories': number
}
export type Category = keyof CategoryCountMap

export type AllCategories = Category | 'All'

export type Product = {
    image_url: string,
    price: number,
    product_id: string,
    title: string,
    category: Category
}

export type Products = Product[] | [];

type CategoryNameAndCount = {
    name: AllCategories,
    count: number
}

export type Categories = CategoryNameAndCount[]
