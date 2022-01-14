import React, { useState, memo} from 'react'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
// import imgInfo from '../../assets/images/消息.png'
// import imgSet from '../../assets/images/设置.png'
import Daifukuan from '../../assets/images/ad_8.png'

import './My.css'

const My = (props) => {
    const {  } = props
    const [homeServiceData, sethomeServiceData] = useState([
        {
            id: 1,
            title: '待付款',
            img: `${ Daifukuan }`
        },
        {
            id: 2,
            title: '待发货',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a315/a31566f822c63d81db558b8a8e86141c_0_1_300_300.jpg'
        },
        {
            id: 3,
            title: '待收货',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/0b11/0b11ca7a00373d680d96962333c20d2a_0_0_0_0_water.jpg'
        },
        {
            id: 4,
            title: '待评价',
            img: 'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8bf5/8bf5912df9de0a0e3579f96fe0be21e6_0_0_0_0_water.jpg'
        }
    ])
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                
                <div className='bgimg-my'>
                    <div className='my-info'>
                        <div className='my-info-head'>
                            <div className='my-info-name'>
                                <div className='image-head'></div>
                                <div className='head-text'>最后的轻语</div>
                            </div>
                            <div className='my-info-icon'>
                                <div className='icon-setting'></div>
                                <div className='icon-info'></div>
                            </div>
                        </div>
                        <div className='my-info-head2'>
                            <div className='head2-one'>收藏0</div>
                            <div className='head2-border'>足迹0</div>
                            <div className='head2-three'>优惠券0</div>
                        </div>
                    </div>
                </div>
                <div className='bookstore-order'>
                    <div className='order-title'>
                        <div className='order-text'>书店订单</div>
                        <div className='order-whole'>
                            <div>查看全部</div>
                            <div className='whole-border'></div>
                        </div>
                    </div>
                    <div className='order-list'>
                        
                        {
                            homeServiceData.map((item, index) => {
                                return (
                                    <li className="homeservice-item" key={index}>
                                        <div className="homeservice-img__box">
                                            {/* {console.log(item.img, '---------------------') } */}
                                            <img src={item.img} alt="" className="homeservice-img" />
                                        </div>
                                        <div className="homeservice-text">{item.title}</div>
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div></div>
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(memo(My))
