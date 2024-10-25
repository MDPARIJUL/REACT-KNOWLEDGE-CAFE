import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
const [bookMarks , setBookMarks] = useState([]);
const [readingTime, setReadingTime] = useState(0)
console.log(readingTime)
const handleBookMarks = (item) =>{
  setBookMarks([...bookMarks, item])
}
const handleMarkAsRead = (time) =>{
    const newTime = readingTime + time
    setReadingTime(newTime)
}
  return (
    <>
        <Header></Header>
        <div className='md:flex max-w-6xl mx-auto'>
            <Blogs handleBookMarks = {handleBookMarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
            <Bookmarks bookMarks = {bookMarks} readingTime = {readingTime}></Bookmarks>
        </div>
    </>
  )
}

export default App
