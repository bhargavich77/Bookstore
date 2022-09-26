import React, { useState, useEffect } from 'react'
import { deleteApi, getCartItem, updateApi } from '../../services/Dataservices'
import { useDispatch } from "react-redux";
import { getCartApiDetails, getModules } from '../../redux/actions/module';
function Bookdetails(props) {
    const [placeOrderBtn, setPlaceOrderBtn] = useState(false)
    const [cartId, setCartId] = useState([])
    const [quantityAdd, setQuantityAdd] = useState([])
    const [getCartDetails, setGetCartDetails] = useState([])
    // const dispatch = useDispatch()
    
    const removeBtn = () => {
        let data = props.bookDetails._id
        deleteApi(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
    }
    const GetCartItem = () => {
        getCartItem().then((response) => {
            console.log(response);
            
            let filter = [];
            filter = response.data.result.filter((cart) => {
                if (cart.product_id._id === props.bookDetails.product_id._id) {
                    setCartId(cart.product_id._id)
                    setQuantityAdd(cart.quantityToBuy)
                    return cart;
                }
            })
            setGetCartDetails(filter)
        }).catch((error) => { console.log(error) })
    }
    const increment = () => {
        let cartIdInc = {
            id: cartId,
            quantityToBuy: quantityAdd + 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }

    const decrement = () => {
        let cartIdInc = {
            id: cartId,
            quantityToBuy: quantityAdd - 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }
    // GetCartItem()
    useEffect(() => {
        GetCartItem()
    }, [])
    return (
        <div>
            <div className='bookNImg'>
                <img src='./images/Image12.png' alt='' className='bookImageCart' />
                <div>
                    <p className='bookNameView'>{props.bookDetails.product_id.bookName}</p>
                    <p className='authorView'>by {props.bookDetails.product_id.author}</p>
                    <p className='priceTagView'>Rs.{props.bookDetails.product_id.discountPrice}</p>
                    <span className='OriginalPriceView'>(RS.{props.bookDetails.product_id.price})</span>
                    <div className='btnPM'>
                        <div id='btnSign' onClick={decrement}>-</div>
                        <div id='btnNo'>{quantityAdd}</div>
                        <div id='btnSign' onClick={increment}>+</div>
                        <h4 style={{ cursor: "pointer" }} onClick={removeBtn}>Remove</h4>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Bookdetails