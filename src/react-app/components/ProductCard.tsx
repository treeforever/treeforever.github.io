import * as React from "react";

export type ProductInfo = { title: string, price: string };


const style = {
  width: '15rem',
  height: '15rem',
  marginRight: '3rem',
  background: '#fbefef',
}

export default ({ title, price }: ProductInfo) => (
  <>
    <div className="product-image" style={style}></div>
    <div className="product-title">{title}</div>
    <div className="product-price">{price}</div>
  </>
)