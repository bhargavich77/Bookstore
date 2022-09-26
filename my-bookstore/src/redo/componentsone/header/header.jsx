import React from 'react'
import './header.css'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    
        <div className='header-home'>
            <div className='sub-box1-home'>
                <img className='image-book-header' src='' />
                <p className='bookstore-text'>Bookstore</p>
                <div className='white-box'>
                    <SearchOutlinedIcon className='search-icon' />
                    <input type='text' className='textbox-search' placeholder='Search...' />
                </div>
            </div>
            <div className='sub-box2-home'>
                <div className='sub-div3-home'>
                    <PersonOutlineIcon className='profile-icon'/>
                    <label className='profile-icon'>Profile</label>
                </div>
                <div className='sub-div3-home'>
                    <ShoppingCartOutlinedIcon className='profile-icon'/>
                    <label className='cart-icon'>Cart</label>
                </div>
            </div>
        </div>
       
    
  )
}

export default Header