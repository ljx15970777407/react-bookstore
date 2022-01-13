import React, { useState } from 'react';
import Scroll from '../../../baseUI/scroll'

import { Tab, Top, Item } from './HomeService.style'
function HomeService(props) {
    const [homeServiceData, sethomeServiceData] = useState([
        {
            id: 1,
            title: '胡适:行走与梦醒之间',
            author: '李伟 著',
            price: '￥17.00元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/d0d1/d0d1fe38d58387dd5d2d8898679a2fff_0_1_300_300.jpg'
        },
        {
            id: 2,
            title: '局内人的写作（李洱文学课）',
            author: '李洱 著',
            price: '￥37.00元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a315/a31566f822c63d81db558b8a8e86141c_0_1_300_300.jpg'
        },
        {
            id: 3,
            title: '《申报》的文人群体与文学谱系',
            author: '花宏艳',
            price: '￥27.00元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/a7a9/a7a92631a7033caf6bde737abbcf2fbb_0_0_0_0_water.jpg'
        },
        {
            id: 4,
            title: '热土荒丘五十年:中亚考古回忆录',
            author: '瑞德维拉扎 著',
            price: '￥18.00元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/ac74/ac74d14f93d4f009bbf5edd4ff79e7ce_0_0_0_0_water.jpg'
        }, {
            id: 5,
            title: '帝制时代的中国:中国历史文化简史',
            author: '[美]贺凯 著',
            price: '￥47.18元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/017a/017a7a134a55218ba527eae737389e08_0_0_0_0_water.jpg'
        }
    ])
    return (
        <Tab>
            <Top>
                <div className="homeservice-left">
                    <div className="homeservice-title">好书推荐</div>
                    {/* <div className="homeservice-tag">极速上门</div> */}
                </div>
                {/* <span className="homeservice-slogan"></span> */}
            </Top>
            <Scroll
                direction={"horizental"}
                refresh={false}
                // pullUp={handlePullUp}
                // pullDown={handlePullDown}
                >
                <Item>
                    {
                        homeServiceData.map((item, index) => {
                            return (
                                <li className="homeservice-item" key={index}> 
                                    <div className="homeservice-img__box">
                                        <img src={item.img} alt="" className="homeservice-img" />
                                    </div>
                                    <div className="homeservice-text">{item.title}</div>
                                    <div className="homeservice-author">{item.author}</div>
                                    <div className="homeservice-price">{item.price}</div>
                                </li>
                            )
                        })
                    }
                </Item>
            </Scroll>
        </Tab>
    )
}

export default React.memo(HomeService)
