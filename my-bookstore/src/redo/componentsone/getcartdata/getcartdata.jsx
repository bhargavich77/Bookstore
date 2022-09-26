import React, { useState } from 'react'
import './getcartdata.css'
import {getCartItems} from '../../services/dataservice'
import image1 from '../mycart/Image 11.png'
import { putCartItem } from '../../services/dataservice'

function Getcartdata(props) {

    const [quantityofCart,setQuantityofCart] = useState(props.items.quantityToBuy)
    const [dataArray,setDataArray] = useState([])
    const [gettingCartid,setGettingCartid] = useState([])

    const GetCartItems = () => {
        getCartItems().then((response) => {
          console.log(response);
          let filterArray = response.data.result.filter((cart) => {
              if(cart.product_id !== null) {
                if(props.items.product_id._id === cart.product_id._id) {
                    setQuantityofCart(cart.quantityToBuy)
                    setGettingCartid(cart._id)
          }
          return cart
              }
              
              

        })
        setDataArray(filterArray)

    }).catch((error) => {
        console.log(error)
    })
    
}  
    const plusQuantity = () => {
        let qunObj = {
            quantityToBuy : props.items.quantityToBuy + 1
        }
        
        putCartItem(qunObj,gettingCartid).then((response) => {
            console.log(response)
            GetCartItems()
          }).catch((error) => {
            console.log(error)
          })
    }
    const minusQuantity = () => {
        let qunObj = {
            quantityToBuy : props.items.quantityToBuy - 1
        }
        putCartItem(qunObj,gettingCartid).then((response) => {
            console.log(response)
            GetCartItems()
          }).catch((error) => {
            console.log(error)
          })
    }
       
        React.useEffect(() => {GetCartItems()},[])
    
        return (
            
                
            <div className='maindiv-getcartdata'>
                <img className='bookimage-mycart' src={image1} alt=''/>
                <div className='bookdetails-getcartdata'>
                
                    <h3 className='bookname-getcartdata'>{props.items.product_id.bookName}</h3>
                    <p className='author-getcart'>{props.items.product_id.author}</p>
                    <h3 className='price-getcart'>Rs.{props.items.product_id.price}</h3>
               
                {
                    !props.orderSummary && 
                    <div className='btn-add-quantity-getcartdata'>
                        <div className='minus-btn-getcartdata' onClick={minusQuantity}><b>-</b></div>
                        <div className='show-quantity-getcartdata'><b>{quantityofCart}</b></div>
                        <div className='plus-btn-getcartdata'  onClick={plusQuantity}><b>+</b></div> 
                        <p className='remove'>Remove</p>
                  </div> 
                }
                 
                 </div>
             </div>
             
          )
    
  
}

export default Getcartdata