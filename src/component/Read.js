import React, { useState } from 'react'
import './styles/read.css'
const Read = ({show,item,onClose}) => {

    if(!show){
        return null;
    }
    let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title
    let subtitle = item.volumeInfo.subtitle
    let purpose = item.volumeInfo.authors
    let desc = item.volumeInfo.description
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={img} alt="" className='imgs' />
                        <div className="info">
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                            <h4>{purpose}</h4>
                            <a href={item.volumeInfo.previewLink}><button>more</button></a>
                        </div>
                </div>
                        <h4 className="description">{desc}</h4>
                    </div>
            </div>
        </>
    )
}

export default Read
