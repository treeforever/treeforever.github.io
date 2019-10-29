import * as React from "react";
import ProductCard, { ProductInfo } from './ProductCard'

const WrappedProductCard = (props: ProductInfo) => <li style={{ display: 'inline-block' }}><ProductCard {...props} /></li>

export default ({ products }: any) => (
  <>
    <ul style={{ 'listStyle': 'none' }}>
      {products.map((product: any) =>
        <WrappedProductCard title={product.title} price={`CA${product.price}`} key={product.product_id} />
      )}
    </ul>
  </>
)