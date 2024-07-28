import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
import { productList } from '../data/ProductList';

export default function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const item = productList.find((element) => element.id === parseInt(id));
    const cartItems = useSelector(state => state.cart.list);
    const element =cartItems.find((itemcount)=>itemcount.id==item.id)
   const [alert ,setAlert]=useState(false);
    const addTocart = () => {
        setAlert(true);
        setTimeout(() => (
            setAlert(true)
        ), 3000);
        dispatch(addItem(item));
    }

    return (
        <div className='card m-2'>
            {alert&&<span className='alert alert-success'>Item Added To cart</span>}
            <div className='mt-2'>
                <img src={item.image} height={350} width={400} alt={item.title} className='border-radius-9' />
            </div>
            <div className="mt-3 card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="mt-2">Price: {`$ ${item.price}`}</h6>
                <h6 className="md-2">Rating: {item.rating.rate}</h6>
                <div className='mt-4'>
                    {item.rating.count > 0 ? 
                    (
                        <>
                            <button className='btn btn-success' onClick={()=>navigate(`/checkout/${item.id}`)}>Buy Now</button>
                            {
                            element?.quantity>0?
                            <button className='ms-3 btn btn-outline-success' onClick={()=>navigate('/cart')}>Go To Cart</button>
                            : <button className='ms-3 btn btn-success' onClick={addTocart}>Add To Cart</button>
                            }
                        </>
                    ) 
                    : (
                        <button className='btn btn-outline-danger'>Out Of Stock</button>
                    )}
                </div>
            </div>
        </div>
    )
}
