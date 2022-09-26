import React, { useState } from 'react'
import './home.css'
import bookimage from './education.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {getBooks} from '../../services/dataservice'
import Book from '../../components/books/book';
import Bookdetail from '../../components/bookdetails/bookdetail';
import Cartpage from '../../components/mycart/cartpage';
import Wishlist from '../../components/wishlist/wishlist';
import Footer from '../../components/footer/footer';
import Ordersuccessfull from '../../components/ordersuccess/ordersuccessfull';
import Header from '../../components/header/header';
import Pagination from '@mui/material/Pagination';

function Home() {
    const [booksArray,setBooksArray] = useState([]);
    const [booklist,setBooklist] = React.useState("");
    const [switchBookDetails,setSwitchBookDetails] = useState(false);
    // const [switchToHome,setSwitchToHome] = useState(false);
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState('');

    const GetBooks = () => {
        getBooks().then((response) => {
            console.log(response)
           setBooksArray(response.data.result);
   
       }).catch((error) => {
           console.log(error);
   
       })
    }
    const listenToBookDetails = (data) => {
        
        setSwitchBookDetails(true)
    }
    const listenToBookList = (data) => {
        setBooklist(data)
    }
    const listentopage =(e,v) => {
        
        setPage(v)
        console.log(v);
    }
    const listenTosearchbar = (e) => {
        setSearch(e.target.value)
        
    }

    // const listenToContinueshopping = () => {
    //     setSwitchToHome(true)
    // }

    React.useEffect(() => {GetBooks()},[])

    
  return (
    <div className='main-container-home'>
        
        <div className='header-home'>
            <div className='sub-box1-home'>
                <img className='image-book-header' src={bookimage} />
                <p className='bookstore-text'>Bookstore</p>
                <div className='white-box'>
                    <SearchOutlinedIcon className='search-icon' />
                    <input type='text' className='textbox-search' placeholder='Search...' value={search} onChange={listenTosearchbar} />
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
        <div className='books-div'>
            <h3>Books</h3>
            <select>
                <option>Sort by relevence</option>
                <option>price:high to low</option>
                <option>price:low to high</option>
            </select>
        </div> 
        
       
         <div className='middle-container'>
            {
                switchBookDetails ? <Bookdetail booklist={booklist}/> :
                page === 1 ?
                 booksArray.slice(0,8).filter(book => book.bookName.toLowerCase().includes(search)).map((book) => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>)
                 : page === 2 ?
                 booksArray.slice(8,16).map((book) => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>)
                 : page === 3 ?
                 booksArray.slice(16,24).map((book) => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>)
                 : page === 4 ?
                 booksArray.slice(24,30).map(book => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>) 
                 : null
            }  
        </div>

               
        {/* <Cartpage /> */}
        {/* <Wishlist /> */}
        <div className='pagination'>
        <Pagination  onChange={listentopage}  count={10} page={page} />
        </div>
        <Footer />
    </div>
  )
}

export default Home