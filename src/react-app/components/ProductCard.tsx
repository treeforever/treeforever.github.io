import * as React from "react";

export type ProductInfo = { title: string, price: string, img: string };


const style = {
  width: '15rem',
  height: '15rem',
  marginRight: '3rem',
  background: '#fbfbfb',
}

export default ({ title, price, img }: ProductInfo) => (
  <>
    <div className="product-image" style={style}>
      <img src={img} alt={title} height="100%" />
    </div>
    <div className="product-title">{title}</div>
    <div className="product-price">{price}</div>
  </>
)