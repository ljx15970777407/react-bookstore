import React from 'react';
import './imgList.css';
import imgList1 from '@/assets/images/imageList1.png';
import imgList2 from '@/assets/images/imageList2.png';

function ImgList() {
    return (
        <div className='imgList-box'>
            <div className="imgList-one">
                <img src={imgList1} className='imgList-one__img1' alt=""/>
            </div>
            <div className="imgList-two">
                <img src={imgList2} className='imgList-one__img2' alt=""/>
            </div>
        </div>
    )
}



export default ImgList
