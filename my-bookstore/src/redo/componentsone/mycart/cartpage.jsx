import React, { useState } from 'react'
import './cartpage.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {getCartItems} from '../../services/dataservice'; 
import Getcartdata from '../getcartdata/getcartdata';
import Addressdetails from '../addressDetails/addressdetails';
import {checkoutItem} from '../../services/dataservice';
import {useDispatch} from 'react-redux';
import {getCartApiDetails, getModules} from '../redux/actions/module';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';

function Cartpage() {
    const [cartItems,setCartitems] = useState([]);
    const [placeorder,setPlaceorder] = useState(false);
    const [orderSummary,setOrderSummary] = useState(false);
    const dispatch = useDispatch();

    const GetCartItems = () => {

        getCartItems().then((response) => {
          console.log(response);
          dispatch(getCartApiDetails(response.data.result));
          setCartitems(response.data.result)
          
        }).catch((error) => {
            console.log(error)
        })
    }

    const batchData = useSelector((state) => state.GetCartApiDetails);
    const cartdetailsRedux = batchData.batchDetails
    console.log('cartdetailsRedux',cartdetailsRedux);

    const listenToPlaceorder = () => {
        setPlaceorder(true)
    }
    const listenToOrderSummary = () => {
        setOrderSummary(true)
    }
    const listenToCheckout = () => {
        let order = [];
        
        for(let i=0;i<cartItems.length;i++) {
            if(cartItems[i].product_id !== null) {
                let product = {
                    product_id : cartItems[i].product_id._id,
                    product_name: cartItems[i].product_id.bookName,
                    product_quantity : cartItems[i].quantityToBuy,
                    product_price: cartItems[i].product_id.price
                }
                order.push(product)
            }
           
        }
        let checkoutObj = {
                orders : order
        }

        checkoutItem(checkoutObj).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
        
        React.useEffect(() => {GetCartItems()},[])

  return (
    <div className='main-container-mycart'> 
        <div className='mycart'>
            <div className='sub-div1-mycart'>
                <h3 className='heading-mycart'>My cart</h3>
                <div className='location'>
                    <LocationOnIcon className='location-icon'/>
                    <p className='location-text'>Use current location</p>
                </div>
                
            </div>
            <div className='sub-div2-mycart'>
            
                {
                   cartdetailsRedux && cartdetailsRedux.filter((book) => book.product_id !== null).map((items) => <Getcartdata items={items} />)
                }
            </div>
                {
                    !placeorder &&
                    <button className='btn-placeorder' onClick={listenToPlaceorder}>PLACE ORDER</button>
                }
            
        </div>
        {
            placeorder ? <Addressdetails listenToOrderSummary={listenToOrderSummary}/>: 
            <div className='rect-addr-details'>
                <p className='rect-text'>Address Details</p>
            </div>
        }
        {
            !orderSummary &&
            <div className='rect-addr-details'>
            <p className='rect-text'>Order Summary</p>
            </div>
        }
        {
            orderSummary &&
            <div className='maindiv-ordersum'>
                <h3 className='head-order'>Order Summary</h3>
                <div className='bookdiv-order'>
                    
                    {
                        cartItems.filter((book) => book.product_id !== null).map((items) => <Getcartdata items={items} orderSummary={orderSummary}/>)
                    }
                </div>
                <button className='btn-checkout' onClick={listenToCheckout}>CHECKOUT</button>
            </div>
        }
        

     </div>       
  
  )
}

export default connect() (Cartpage)