import { Products, Category, Categories } from './types'



export const getCategories = (products: Products): Categories => {
    const categories = [
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

    products.forEach((product) => {
        categoryCountMap[product.category] += 1;
    })


    const a =  categories.map((categoryName: Category) => ({ name: categoryName, count: categoryCountMap[categoryName] }))
    return a;
}