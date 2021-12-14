import React, { useState, useEffect } from 'react'
import { BookSection, BookCard } from './StyledComponents'


export const BookList = () => {
    const [listBooks, setListBooks] = useState([])
  
    useEffect(() => {
      fetchListBooks()
    }, [])
  
    const fetchListBooks = () => {
      fetch('https://rosanna-book-mongo-api.herokuapp.com/')
        .then((res) => res.json())
        .then((data) => setListBooks(data))
    }
}

return (
    <BookSection>
    {listBooks.map((books) => (
      <BookCard key={books.id}>    
        </BookCard>
      ))}
    </BookSection>
  )
