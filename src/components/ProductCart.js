import React from 'react'
import { useNavigate } from 'react-router'

export default function ProductCart(props) {
    const navigate = useNavigate();
    return (
        <div className='card m-2 cursor-pointer' style={{ width: 300 }} role='button' onClick={() => navigate(`/Product/${props.id}`)}>
            <div className='mt-2'>
                <img src={props.image} height={150} width={180} alt={props.title} className='border-radius-9' />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="mt-2">Price: {`$ ${props.price}`}</h6>
                <h6 className="md-2">Rating: {props.rating.rate}</h6>
                <div className='mt-4'>
                    {props.rating.count > 0 ? <button className='btn btn-success'> Available </button> : <button className='btn btn-outline-danger'>Out Of Stock</button>}
                </div>
            </div>
        </div>
    )
}
