import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { setProducts, setSearchTerm, decreaseItem } from '../redux/reducer/productlist';
import {productList} from '../data/ProductList'
export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list);
    const searchTerm = useSelector(state => state.products.searchTerm);
    debugger
  
    useEffect(() => {
        // Fetch the product list from a fake API or backend service
        dispatch(setProducts(productList));
      }, []);
    
      const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
      };
  
  
    return (

        <div className='p-3 bg-secondary'>
            <h3>Ecommerce Projects</h3>
            <div className='row justify-content-center pt-2 pb-1'>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex' >
                    <button className='btn btn-success me-3' onClick={()=>navigate('/')}>Home</button>
                    {/* <input className='form-control' type='search' placeholder='Search.....'/> */}
                    <input type="text" className='form-control' placeholder='Search.....' value={searchTerm} onChange={handleSearch}  />
                    <button className='btn btn-success ms-3' onClick={()=>navigate('/cart')}>Cart</button>
                </div>
            </div>
        </div>
    )
}
