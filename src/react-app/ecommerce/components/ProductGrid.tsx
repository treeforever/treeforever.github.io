import * as React from "react";
import ProductCard, { ProductInfo } from './ProductCard'
import { Product, Products } from '../types'

const WrappedProductCard = (props: ProductInfo) => <li style={{ display: 'inline-block' }}><ProductCard {...props} /></li>

export default ({ products }: { products: any }) => (
  <>
    <ul style={{ 'listStyle': 'none' }}>
      {products.length > 0 && products.map((product: Product) =>
        <WrappedProductCard title={product.title} price={`CA${product.price}`} img={product.image_url} key={product.product_id} />
      )}
    </ul>
  </>
)