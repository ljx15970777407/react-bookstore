import React from 'react';
import './ImgList2.css';
import imgList3 from '@/assets/images/imageList3.png';
import imgList4 from '@/assets/images/imageList4.png';

function ImgList2() {
    return (
        <div className='imgList-box2'>
            <div className="imgList-three">
                <img src={imgList3} className='imgList-one__img3' alt="" />
            </div>
            <div className="imgList-four">
                <img src={imgList4} className='imgList-one__img4' alt="" />
            </div>
        </div>
    )
}



export default ImgList2
