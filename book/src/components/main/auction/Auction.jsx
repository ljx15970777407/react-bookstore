import React from 'react';
import './Auction.css'
import imgList5 from '@/assets/images/imageList5.png';

function Auction() {
    return (
        <div className='container'>
            <div className='title'>拍卖</div>
            <div className=''>
                <img src={imgList5} alt="" className='.imgList-one__img5'/>
            </div>
        </div>
    )
}

export default Auction