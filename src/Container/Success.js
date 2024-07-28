import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function Success() {
    const [count , setCount]=useState(5);
    const navigate = useNavigate();
    useEffect(()=>
    {
        setInterval(()=>setCount((count)=>count-1) ,1000)
        setTimeout(()=>
            {
                navigate('/');
            },15000)
    },[navigate]);
  return (
    <h5 className='mt-5'>    
    <div>Your  Order been Placed Successfully .You will be Redirected in{""}{count} Seconds</div>
    </h5>
  )
}
