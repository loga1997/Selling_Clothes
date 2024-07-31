
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Success() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get('payment_id');
    console.log("Payment ID:", paymentId); // You can use this ID if needed

    const intervalId = setInterval(() => setCount((c) => c - 1), 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      navigate('/');
    }, 5000); // Redirect after 5 seconds instead of 15 for testing

    // Cleanup interval and timeout on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate, location.search]);

  return (
    <h5 className='mt-5'>
      <div>Your Order has been Placed Successfully. You will be redirected in {count} Seconds</div>
    </h5>
  );
}
