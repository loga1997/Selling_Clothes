import React from 'react'
import ProductCart from '../components/ProductCart'
import {productList} from '../data/ProductList'
export default function Dasboard() {
  return (
   <div className='d-flex flex-wrap justify-content-center p-3'>
    
    {productList.map((product, index) => (
        <ProductCart key={product.id} {...product}  />
      ))}
   </div>
  )
}
