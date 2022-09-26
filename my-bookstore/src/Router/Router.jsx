import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import React from 'react'
import Imagepage from '../components/imagepage/imagepage';
import View from '../pages/Bookstore-View/View';
import Order from '../pages/Bookstore-ordersuccess/Order';
import Home from '../pages/Bookstore-Home/Home';
import Cart from '../pages/Bookstore-cart/Cart';
import Wishlist from '../pages/Bookstore-wishlist/Wishlist';
import OrderSummary from '../pages/Bookstore-cart/OrderSummary';
import Header from '../components/Bookstore-header/Header';

function RouterNav() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Imagepage/>} />
                    <Route path="/Cart" element={<Cart/>} />
                    <Route path= "/Home" element= {<Home/>}/>
                    <Route path="/Wishlist" element={<Wishlist/>} />
                    <Route path="/Order" element={<Order/>} />
                    <Route path="/View" element={<View/>} />
                    <Route path="/OrderSummary" element={<OrderSummary/>} />
                    <Route path="/Head" element={<Header/>} />


                </Routes>
            </Router>
        </div>
    )
}

export default RouterNav