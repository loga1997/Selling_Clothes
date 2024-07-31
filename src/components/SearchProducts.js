import React from 'react'
import ProductCart from '../components/ProductCart'
import {productList} from '../data/ProductList'
import { useSelector } from 'react-redux';
export default function Searchproducts() {
    const products = useSelector(state => state.products.list);
  const searchTerm = useSelector(state => state.products.searchTerm);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
   <div className='d-flex flex-wrap justify-content-center p-3'>
    
    {productList.map((product, index) => (
        <ProductCart key={product.id} {...product}  />
      ))}
   </div>
  )
}