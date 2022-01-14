import React, { Component } from 'react';
import './SearchInput.css'
import imgJiahao from '../../assets/images/加号.png'
// import imgPlace from '../../assets/images/定位.png'
import imgSearch from '../../assets/images/搜索.png'
import imgAuction from '../../assets/images/拍卖.png'
import imgLogo from '../../assets/images/logo.png'

const SearchInput = (props) => {
    const { handleOnclick, SearchBoxhandleOnclick }= props;
    return (
        <>
        
        <div className="search" >
                <div className='head-top'>
                    <div className='head-logo'>
                        <img src={imgLogo} alt="" />
                        <div className='logo-text'>十九年口碑平台</div>
                    </div>
                    <div className='head-text'>认证卖家·担保交易·快速发货·售后保障</div>
                </div>
            <div className="search-input">
                <div className='search-auction'>
                    <img src={imgAuction} alt="" />
                    <div className='auction-text'>拍卖区</div>
                </div>
                <div className="search-place">
                    {/* <img className='location-img' src={imgPlace}></img>
                    <p className="location">南昌</p> */}
                    <p className='search-border'>
                        <img className='search-img' src={imgSearch}></img>
                    </p>
                    <input type="text" placeholder='商品名称 作者 出版社 ISBN' onFocus={SearchBoxhandleOnclick}/> 
                </div>
            </div>
            <img className="search-jiahao" src={imgJiahao} onClick={()=>{handleOnclick()}}></img>
            </div>
        </>
    )
}

export default SearchInput
