import { Products, Category, Categories, ALL_CATEGORY } from './types'

export const getCategories = (products: Products): Categories => {
    if (products.length === 0) return [];

    const categories = [
        ALL_CATEGORY,
        'Sweaters',
        'Tops',
        'Outerwear',
        'Dresses',
        'Pants',
        'Shoes',
        'Accessories'
    ]

    let categoryCountMap: any = {}
    categories.forEach(category => {
        categoryCountMap[category] = 0
    })
    categoryCountMap.All = products.length

    products.forEach((product) => {
        categoryCountMap[product.category] += 1;
    })

    return categories.map((categoryName: Category) => ({ name: categoryName, count: categoryCountMap[categoryName] }))
}