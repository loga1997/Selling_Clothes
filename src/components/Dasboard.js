import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';
import { productList } from '../data/ProductList';

export default function Dashboard() {
  const products = useSelector(state => state.products.list);
  debugger
  const searchTerm = useSelector(state => state.products.searchTerm);
  let [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    if (products != null && products.length > 0) {
      debugger
      let filteredProduct = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      setfilteredProducts(filteredProduct)
    }
  }, [searchTerm])



  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {console.log("filteredProducts", filteredProducts,productList)}
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCart key={product.id} {...product} />
        ))
      ) : (
        productList.map(product => (
      <ProductCart key={product.id} {...product} />
      ))
      )}
    </div>
  );
}
