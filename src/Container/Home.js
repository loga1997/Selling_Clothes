import React from 'react'
import Header from '../components/Header'
import { Routes, Route} from 'react-router-dom'
import Dasboard from '../components/Dasboard'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import Success from './Success';
export default function Home()
{
    return(
        <div>
            <Header/>
            {/* <Dasboard/> */}
            <Routes>
                <Route path='/' element={<Dasboard/>}></Route>
                <Route path='/Product/:id' element={<Product />} />                
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/checkout/'>
                   <Route path='' element={<Checkout/>}></Route>
                    <Route path=':id' element={<Checkout/>}></Route>
                </Route>
           <Route path='/success/:id' element={<Success/>}></Route>
                </Routes>
           
        </div>
            
    )
   
   
}