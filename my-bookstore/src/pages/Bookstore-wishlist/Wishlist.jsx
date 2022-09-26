import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import Header from '../../components/Bookstore-header/Header'
import Footer from '../../components/Bookstore-footer/Footer'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import name from '../../images/name.png'
import {getWishlistItem} from '../../services/Dataservices'

function Wishlist() {
    const [getWishlistDetails, setGetWishlistDetails] = useState([])
    const [wishlistId, setWishlistId] = useState([])
    const showWishlistItem = () => {
        getWishlistItem().then((response) => {
            console.log(response);
            setGetWishlistDetails(response.data.result)
        }).catch((error) => { console.log(error) })
    }
    useEffect(()=>{
        showWishlistItem();
    },[])
  return (
    <div>
            <div>
                <Header />
            </div>
            <div className='myWishlist'>
                <div className='myWishlistDiv'>
                    <div id='idBookTextwish'>
                        <h4 style={{ color: '#DBDBDB' }}>Home/</h4>
                        <h4>My WishList</h4>
                    </div>
                    <div className='textWishlist'>
                        <h4>My WishList(02)</h4>
                    </div>
                    {
                        getWishlistDetails.map((wish)=>
                    <div className='detailsWish'>
                    
                        <div className='innerDivWish'>
                            <div className='bookNImg'>
                                <img src={name} alt='' className='bookImageWish' />
                                <div style={{marginLeft:"25px"}}>
                                    <p className='bookNameView'>{wish.product_id.bookName}</p>
                                    <p className='authorView'>by {wish.product_id.author}</p>
                                    <p className='priceTagView'>Rs.{wish.product_id.discountPrice}</p>
                                    <span className='OriginalPriceView'>(RS.{wish.product_id.price})</span>
                                </div>
                            </div>
                            <div>
                                <DeleteOutlineIcon />
                            </div>
                        </div>
                       
                    </div>
                    )
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
  )
}

export default Wishlist