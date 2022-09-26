import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Bookstore-header/Header'
import Footer from '../../components/Bookstore-footer/Footer'
import Books from '../../components/Book-list/Books'
import {getBooks} from '../../services/Dataservices'
import View from '../Bookstore-View/View'
import Pagination from '@mui/material/Pagination';
import {useEffect} from 'react'
function Home() {
    const[bookDetails,setBookDetails] = useState([])
    const[bookView, setBookView] = useState([])
    const[bookRender, setBookRender] = useState(false)
    const [page,setPage] = useState(1)
    const nextPage = (e,value) => {
        // console.log(value);
        setPage(value)
    }
    const booksPerPage=10;
    const [recordsPerPage,setRecordsPerPage] = useState(booksPerPage);
    const indexOfLastRecord = page * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const[pagination,setPagination]=useState({
    //     count:0,
    //     from:0,
    //     to:booksPerPage
    // });
    // useEffect(()=>{
    // },[]);
    const books = (book) => {
        setBookRender(true);
        setBookView(book)
    }

    const searchBook = (value) => {
        const filteredItem = bookDetails.filter((book)=>
            book.bookName.toLowerCase().search(value) !== -1
        )
        setBookDetails(filteredItem) 

        if(value.trim() === ""){
            GetBooks();
        }
    }
    
    const GetBooks = () =>{
        getBooks().then((response) => { console.log(response); setBookDetails(response.data.result)}).catch((error) => { console.log(error) })
    }
    useEffect(() => {
        GetBooks();
    }, []);
    console.log(bookDetails)
  return (
    <div className='dashboard'>
            <div>
                <Header setState={searchBook}/>
            </div>
            <div className='dashboardDiv'>
                <div className='bookText'>
                    <div id='idBookText'>
                        <h4>BOOKS</h4>
                        <span>()</span>
                    </div>
                    <select><option>Sort By Reference</option></select>
                </div>
                <div className='displayBooks'>
                    
                    {/* {bookDetails.map(book=><Books book={book}/>)} */}
                    {
                        // bookRender?<View bookView={bookView} /> : bookDetails.map((book)=><Books book={book} books={books}/>)
                        bookRender?<View bookView={bookView} /> : bookDetails.slice(indexOfFirstRecord,indexOfLastRecord).map((book)=><Books book={book} books={books}/>)
                    }
                
                </div>
            </div>
            <div className='pagination-bar'><Pagination count={bookDetails.length/booksPerPage} onChange={nextPage} page={page} /></div>
            <div>
                <Footer />
            </div>
        </div>
  )
}

export default Home