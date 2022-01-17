import React from 'react';
import imgSearch from '@/assets/images/搜索.png'
import imgX from '@/assets/images/x.png'
import HeaderComponent from '@/common/headerComponent/HeaderComponent.jsx'
import './Search.css'

const Search = () => {
    const handleShare = () => {
        // to be continue share
    }
    return (
        <div>
            <HeaderComponent title='搜索' handleShare={handleShare} />
            <div className='search-top'>
                <div className="search-searchplace">
                    <p className='search-searchborder'>
                        <img className='search-searchimg' src={imgSearch}></img>
                    </p>
                    <input type="text" placeholder='商品名称 作者 出版社 ISBN' />
                    <p className='search-searchborder-x'>
                        <img className='search-searchimg' src={imgX} alt="" />
                    </p>
                </div>
                <div className='search-text'>搜索</div>
            </div>
            <div className='search-mid'>
                <div className='search-mid-left'>商品</div>
                <div className='search-mid-mided'>书目</div>
                <div className='search-mid-right'>店铺</div>
            </div>
            <div className='search-hot'>
                <div className='search-hot-title'>热门搜索</div>
                <div className='search-hot-list'>
                    <div className='search-hot-list1'>
                        <p>史景迁</p>
                        <p>叶廷芳</p>
                        <p>章开沅</p>
                    </div>
                    <div className='search-hot-list2'>
                        <p>叶茂中</p>
                        <p>许渊冲</p>
                        <p>高式熊</p>
                    </div>
                    <div className='search-hot-list3'>
                        <p>李泽厚</p>
                        <p>天吾手记</p>
                        <p>盗墓笔记</p>
                    </div>
                    <div className='search-hot-list4'>
                        <p>童话大王</p>
                        <p>何兆武</p>
                        <p>十宗罪</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Search