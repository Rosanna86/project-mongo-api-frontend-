import React from 'react'
import { BookList } from 'components/BookList'


export const App = () => {
  return (
    <Routes>
        <Route path='/music' element={<MusicList />} />
    <div>
      Find me in src/app.js!
    </div>
    </Routes>
  )
}
