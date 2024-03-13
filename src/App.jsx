import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  

    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handelBookmark = blog =>{
      // console.log(blog)
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }


    const handelMarkAsRead = (id, time) =>{
      const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmarks(newBookmarks);
      setReadingTime(readingTime + time);
    }

  return (
    <>
      
      <Header></Header>
      <main className='container mx-auto lg:flex gap-6'>
      <Blogs 
      handelBookmark={handelBookmark}
      handelMarkAsRead={handelMarkAsRead}
      
      ></Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </main>
      
    </>
  )
}

export default App
