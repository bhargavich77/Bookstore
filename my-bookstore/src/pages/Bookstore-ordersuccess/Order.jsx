import React from 'react'
import './Order.css'
import Header from '../../components/Bookstore-header/Header'
import Footer from '../../components/Bookstore-footer/Footer'
import orderpic from '../../images/orderpic.jpg'
import orderpic1 from '../../images/orderpic1.jpg'
import { useNavigate } from "react-router-dom";

function Order() {
    const navigate = useNavigate();
    const navigateToHomePage=()=>{
        navigate('/Home');
    }
  return (
    <div>
    <div>
        <Header />
    </div>
    <div className='orderSuccess'>
        <img src={orderpic} alt=''/>
        <p className="texting">hurray!!! your order is confirmed</p>
        <img src={orderpic1} alt=''/>
        <p>the order id is #123456 save the order id for</p>
        <p>further communication</p>
        <div className='headerTextOrder'>
            <span>Email Us</span>
            <span>Contact Us</span>
            <span>Address</span>
        </div>
        <div className='detailsOrder'>
            <div id='emailOrder'>
                <span>admin@bookstore.com</span>
            </div>
            <div id='contactOrder'>
                <span>+91 9876543210</span>
            </div>
            <div id='addressOrder'>
                <p>42,14th main,15th cross sector 4 opp to BDA <br/> Banglore 560034</p>
            </div>
        </div>
        <div>
            <button className='btnCS' onClick={navigateToHomePage}>Continue Shopping</button>
        </div>
    </div>
    <div className="footer-part">
        <Footer />
    </div>
</div>

  )
}

export default Order