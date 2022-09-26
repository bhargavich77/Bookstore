import React from 'react'

import './book.css'

function Book(props) {
  const showBookdetails = (data) => {
    console.log(data)
    props.listenToBookList(data)
    props.listenToBookDetails(true)
  }

  return (
    <div className='book-list'>
      <div className='sub-div1-booklist' onClick={() => showBookdetails(props.book)}>
        <img src='' className='image-book'/>
      </div>
      <div className='sub-div2-booklist'>
        <p className='book-name'>{props.book.bookName}</p>
        <p className='author-name'>{props.book.author}</p>
        <p className='rating'>4.5* </p>
        <p className='book-rate'>Rs.{props.book.price}</p>
      </div>  
    </div>
  )
}

export default Book