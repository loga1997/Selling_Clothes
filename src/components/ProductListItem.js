import React from 'react';
import '../CartComponent.css';

export default function ProductListItem(props) {
    return (
        <div className="product-list-item card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="img-fluid rounded-start" alt={props.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Price: ${props.price}</p>
                        <p className="card-text">Rating: {props.rating.rate}</p>
                        <div className="d-flex align-items-center">
                            <span className="me-2">Quantity:</span>
                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={props.handleDecrease}>-</button>
                            <span>{props.quantity}</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={props.handleIncrease}>+</button>
                        </div>
                        <button className="btn btn-sm btn-danger mt-3" onClick={props.handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
