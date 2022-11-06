
import React,{useState,useEffect} from 'react'
import './styles/banner.css'
import axios from 'axios'
import Book from './Book'
const Banner = () => {
    const[search,setsearch] = useState("")
    const[data,setdata] = useState([])
    const[button,setButton] = useState('')

    useEffect(()=>{
                axios.get('https://www.googleapis.com/books/v1/volumes?q='+ button+'&key=AIzaSyBNYJPSdxq9HDUkhWJtFxjFqPi7OaHaInA'+'&maxResults=40').
                then(res=>setdata(res.data.items))
                .catch(err=>console.log(err))
    },[button])
    const handleClick = (()=>{
        setButton(search)
    })
    return (
        <>

        <div className="banner">
            <h1>search your book here </h1>
            <div className="sea">
                <input type="text" placeholder='search here' id='a' 
                value={search} onChange={e=>setsearch(e.target.value)} 
                />
                <button className='btn2' onClick={handleClick}><i class="fas fa-search"></i></button>
            </div>
        </div>
        <div className="book">
            {
                <Book book = {data}/>
            }
     

     </div>
        </>
    )
}

export default Banner
