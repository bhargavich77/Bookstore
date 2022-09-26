import React from 'react'
import './bookdetail.css'
import bookimage from '../books/bookimg.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {getCartItems} from '../../services/dataservice';
import { addCartItems } from '../../services/dataservice';
import { putCartItem } from '../../services/dataservice';
import { useState } from 'react';
import { addWishlist } from '../../services/dataservice';

function Bookdetail(props) {
  console.log(props)
  const [gettingCartelement,setGettingCartelement] = useState([]);
  const [getCartitem,setGetCartitem] = useState([]);
  const [quantity,setQuantity] = useState()

 const GetCartItems = () => {
      getCartItems().then((response) => {
        console.log(response);
        let filterArray = response.data.result.filter((cart) => {
          if(cart.product_id !== null){
            
            if(props.booklist._id === cart.product_id._id) {
              console.log(cart._id)

              setGettingCartelement(cart._id);
              setQuantity(cart.quantityToBuy)
            }
            return cart
          }
          
        })
        setGetCartitem(filterArray);
        

      }).catch((error) => {
        console.log(error)
      })
      
 } 
 const addToCart = () => {
    addCartItems(props.booklist._id).then((response) => {
      console.log(response)
      GetCartItems()
    }).catch((error) => {
      console.log(error)
    })
 }
 const decrementQuantity = () => {
  let cartObj = {
    quantityToBuy : quantity - 1
  }
    putCartItem(cartObj,gettingCartelement).then((response) => {
      console.log(response)
      GetCartItems()
    }).catch((error) => {
      console.log(error)
    })
 }
 const incrementQuantity = () => {
    let cartObj = {
      quantityToBuy : quantity + 1
    }
    putCartItem(cartObj,gettingCartelement).then((response) => {
      console.log(response)
      GetCartItems()
    }).catch((error) => {
      console.log(error)
    })
}

const wishList = (data) => {
  
  addWishlist(data).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
  
}


 React.useEffect(() => {GetCartItems()},[]);
  return (
    <div className='main-block-details'>
      <div className='sub-block1-details'>
        <div className='image-block-details'>
            <img className='bookimage-details' src={bookimage}/>
         </div>  
          <div className='button-cart-wishlist'>
            {
              (gettingCartelement.length !== 0) ? (
                <div className='btn-add-quantity'>
                  <div className='minus-btn' onClick={decrementQuantity}><b>-</b></div>
                  <div className='show-quantity'><b>{quantity}</b></div>
                  <div className='plus-btn' onClick={incrementQuantity}><b>+</b></div>
                </div>  
              )  : 
              <button className='btn-addtobag' onClick={addToCart}><span className='addtobag'>ADD TO BAG</span></button>
            }
              
              <button className='btn-wishlist'  onClick={() =>wishList(props.booklist._id)}><FavoriteBorderIcon className='fav-icon'/><span className='wishlist'>WISHLIST</span></button>
          </div>
      </div>
       <div className='sub-block2-details'>
          <h2 className='book-name-details'>{props.booklist.bookName}</h2>
          <p className='author'>{props.booklist.author}</p>
          <p className='rating-details'>4.5 *</p>
          <h2 className='price-details'>Rs.{props.booklist.price}</h2>
          <div>
            <p className='para-heading'>Book Detail</p>
            <p className='para-details'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            Lorem ipsum dolor sit amet, consetetur sadipscing 
            </p>
          </div>
          <h3 className='customer-feedback'>Customer Feedback</h3>
          <div className='overall-rating-box'>
            <p className='text-overallrating'>Overall rating</p>
            <div className='staricon-div'>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
            </div>
            <div className='whitebox-textfield'>
              <input className='textfield-review' type='text' placeholder='Write your review'/>
            </div>
            <button className='btn-submit-details'>Submit</button>
          </div>
          <div className='review-box1'>
              <p className='first-review'><span className='first-review-person'>AC</span></p>
              <div className='subdiv-review-details'>
                  <p className='custmr-name'>Aniket Chile</p>
                  <div className='staricon-subdiv'>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='starIcon'/>
                    <StarOutlineIcon className='starIcon'/>
                  </div>
                  <p className='review-para'>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</p>
              </div>
          </div>
          <div className='review-box2'>
          <p className='first-review'><span className='first-review-person'>SB</span></p>
              <div className='subdiv-review-details'>
                  <p className='custmr-name'>ShwetaBodkar</p>
                  <div className='staricon-subdiv'>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='starIcon'/>
                  </div>
                  <p className='review-para'>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</p>
              </div>
          </div>
       </div>
        
    </div>
  )
}

export default Bookdetail