import React, { useState } from 'react';
import Scroll from '../../../baseUI/scroll'
import imgMore from '@/assets/images/大于号.png'
import { useHistory } from 'react-router-dom';

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
            title: '历史脉络中的收藏与鉴定',
            author: '薛龙春',
            price: '￥58.00元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/0b11/0b11ca7a00373d680d96962333c20d2a_0_0_0_0_water.jpg'
        }, 
        {
            id: 4,
            title: '故事法则',
            author: '施爱东',
            price: '￥37.98元起',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8bf5/8bf5912df9de0a0e3579f96fe0be21e6_0_0_0_0_water.jpg'
        }
    ])
    const history = useHistory()
    const gotoMore = () => {
        history.push('/more')
    }
    return (
        <Tab>
            <Top>
                <div className="homeservice-left">
                    <div className="homeservice-title">好书推荐</div>
                    <div className="homeservice-more" onClick={() => gotoMore()}>
                        <div className='more-text'>更多</div>
                        <div className='more-img'>
                            <img src={imgMore} alt="" />
                        </div>
                    </div>

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
