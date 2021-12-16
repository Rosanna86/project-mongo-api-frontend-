import React from 'react';
import { BookList } from 'components/BookList'
import { Header } from 'components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route exact path="/"  element={<BookList />} />
      </Routes>
    
    </BrowserRouter>
    
  )
}
