import React, { useState, useEffect } from 'react'
import { BookSection, BookCard } from './StyledComponents'
import {  BookBackground } from './BookBackground';

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
        <BookBackground backgroundImage={"../assets/img/books-unsplash.jpg"}>
    {listBooks.map((books) => (
      <BookCard key={books.bookID}>
        <h1>{books.title}</h1> 
        <h2>{books.authors}</h2> 
        <h3>Average rating: {books.average_rating}</h3>     
        </BookCard>
      ))}
      </BookBackground>
    </BookSection>
  )}
    