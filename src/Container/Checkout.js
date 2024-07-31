import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import ProductListItem from '../components/ProductListItem';
import { addItem, removeItem, decreaseItem } from '../redux/reducer/cart';
import { productList } from '../data/ProductList';
export default function Checkout() {
    const params = useParams();
  
    const list = useSelector(state => state.cart.list);
    const [state, setState] = useState(
        params.id ?[ {
            ...productList.find((element) => element.id === parseInt(params.id)),
            Quantity: 1,
        }
    ]
            : list
    );

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
        <>
            <h2 className="text-center mb-4">Cart Items</h2>
            {state.length === 0 ? (
                <p>No Items in The  CheckOut</p>
            ) : (
                <>
                    {state.map(item => (
                        <ProductListItem
                            {...item}
                            key={item.id}
                            handleIncrease={() => handleIncrease(item)}
                            handleDecrease={() => handleDecrease(item)}
                            handleRemove={() => handleRemove(item)}
                        />
                    ))}
                    {/* <button className='btn btn-success' onClick={() => navigate('/success')}>Place Order</button> */}
                </>
            )}
        </>
    );
}
