import * as React from "react";
import ProductCard, { ProductInfo } from './ProductCard'

const WrappedProductCard = (props: ProductInfo) => <li style={{ display: 'inline-block' }}><ProductCard {...props} /></li>

export default () => (
  <>
    <ul style={{ 'listStyle': 'none' }}>
      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />

      <WrappedProductCard title="Aire Turtleneck Sweater" price="CA$135.00" />
      <WrappedProductCard title="Baby Brannan Bear Sherpa Jacket" price="CA$59.95" />
      <WrappedProductCard title="Women's Medium-Support Sports Bra" price="CA$48" />
    </ul>
  </>
)