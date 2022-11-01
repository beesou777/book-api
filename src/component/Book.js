import React, { useState } from 'react'
import Read from './Read'
import './styles/book.css'
const Book = ({book}) => {
  console.log(book)
  const [show,setshow] = useState(false)
  const[bookitems,setitems] = useState()
  return (
    <>
      {
        book.map((item) => {
          let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          if(img !== undefined){
            return (
              <>
                <div className="card">
                  <img src={img} alt="" id='img3' />
                  <div className="bottom">
                    <h1 className="title">{item.volumeInfo.title}</h1>
                    <button className="btn" onClick={()=>{setshow(true);setitems(item)}}>Read</button>
                  </div>
                </div>
                <Read show = {show} item={bookitems} onClose={()=>setshow(false)}/>
              </>
            )
          }
         
        })
      }

    </>
  )
}

export default Book
