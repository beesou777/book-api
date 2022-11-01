import React from 'react'
import img from "./img/book.png"
import "./styles/navbar.css"
const Navbar = () => {
  return (
   <>
   <div className="navbar">
    <div className="brand">
        <img src={img} alt="" /> book<span className="text">Store</span>
    </div>
    <div className="search">
        this is react api 
        
    </div>
   </div>
   </>
  )
}

export default Navbar
