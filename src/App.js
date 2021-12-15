import React from 'react';
import { BookList } from 'components/BookList'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/"  element={<BookList />} />
      </Routes>
    </BrowserRouter>
  )
}
