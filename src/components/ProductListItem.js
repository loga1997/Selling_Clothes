import React, { useState } from 'react';
import '../CartComponent.css';
import { useNavigate } from 'react-router-dom';

export default function ProductListItem(props) {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');

    const handleSubmit = (e, BookAmount) => {
        e.preventDefault();
        if (BookAmount === "") {
            alert("Please Enter Amount");
        } else {
            var options = {
                key: "rzp_test_XyeRGL0erzaUb6",
                key_secret: "2p0qTxwchakbk0yfdCXrIZow",
                amount: BookAmount * 100,
                currency: "INR",
                name: "STARTUP_PROJECTS",
                description: "for Testing Purpose",
                handler: function(response) {
                    // Redirect to the success page with the payment ID
                    navigate(`/success?payment_id=${response.razorpay_payment_id}`);
                },
                prefill: {
                    name: "loganathan",
                    email: "logaece1997@gmail.com",
                    contact: "9790575145",
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    };

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
                                <div><p className="card-text">Rating: {props.rating.rate}</p></div>
                                <div className="">
                                    <span className="me-2">Quantity:</span>
                                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={props.handleDecrease}>-</button>
                                    <span>{props.quantity}</span>
                                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={props.handleIncrease}>+</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className="btn btn-sm btn-danger mr-2" onClick={props.handleRemove}>Remove</button>
                                <button
                                    className='btn btn-success'
                                    onClick={(e) => handleSubmit(e, props.price)}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
