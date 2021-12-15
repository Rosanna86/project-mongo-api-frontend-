import React, { useState, useEffect } from 'react'
import { BookSection, BookCard } from './StyledComponents'


export const BookList = () => {
    const [listBooks, setListBooks] = useState([])
  
    useEffect(() => {
      fetchListBooks()
    }, [])
  
    const fetchListBooks = () => {
      fetch('https://rosanna-book-mongo-api.herokuapp.com/books')
        .then((res) => res.json())
        .then((data) => setListBooks(data))
    }

return (
    <BookSection>
    {listBooks.map((books) => (
      <BookCard key={books.bookID}>
        {books.title}    
        <img src={`https://books.google.com/books?vid=ISBN${books.isbn}&printsec=frontcover`} alt="covers of books"></img>
        </BookCard>
      ))}
    </BookSection>
  )}
    