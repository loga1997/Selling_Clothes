import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import ProductListItem from '../components/ProductListItem';
import { addItem, removeItem, decreaseItem } from '../redux/reducer/cart';
import { Navigate } from 'react-router';
export default function CartComponent() {
    const cartItems = useSelector(state => state.cart.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleIncrease = (item) => {
        dispatch(addItem(item));
    };

    const handleDecrease = (item) => {
        dispatch(decreaseItem(item));
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='col-md-6'>
                <div className="row">
                    {cartItems.map(item => (
                        <div key={item.id} className="col-md-12 mb-4">
                            <ProductListItem 
                                {...item}
                                handleIncrease={() => handleIncrease(item)}
                                handleDecrease={() => handleDecrease(item)}
                                handleRemove={() => handleRemove(item)}
                            />
                        </div>
                        
                    ))}
                 
                  <button className='btn btn-success' onClick={()=>navigate('/checkout')}>Go To Checkout</button>
                </div>
               
                </div>
                
            )}
             <div className='container'>
                        <input type='text' placeholder='Enter name'/>
                        <input type='text' placeholder='Enter Address'/>
                        <input type='text' placeholder='Enter Phone'/>
                    </div >
        </div>
    );
}
