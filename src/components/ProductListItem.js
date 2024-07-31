import React from 'react';
import '../CartComponent.css';
import { useNavigate } from 'react-router'
export default function ProductListItem(props) {
    const navigate = useNavigate();
    return (
<div className="container">
<div className="product-list-item card mb-3">
            
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="img-fluid rounded-start" alt={props.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className='d-flex justify-center mb-3'>
                        <div><p className="card-text">Price: ${props.price}</p></div>
                        <div> <p className="card-text">Rating: {props.rating.rate}</p></div>
                        <div className="">
                            <span className="me-2">Quantity:</span>
                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={props.handleDecrease}>-</button>
                            <span>{props.quantity}</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={props.handleIncrease}>+</button>
                        </div>
                        </div>
                     <div className='d-flex justify-content-center'>
                        <button className="btn btn-sm btn-danger mr-2" onClick={props.handleRemove}>Remove</button>
                        <button className='btn btn-success' onClick={() => navigate('/success')}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
