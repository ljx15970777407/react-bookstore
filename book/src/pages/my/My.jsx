import React, { useState, memo } from 'react'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
// import imgInfo from '../../assets/images/消息.png'
// import imgSet from '../../assets/images/设置.png'
import Daifukuan from '../../assets/images/Daifukuan.png'
import Daiqueren from '../../assets/images/Daiqueren.png'
import Daifahuo from '../../assets/images/Daifahuo.png'
import Daishouhuo from '../../assets/images/Daishouhuo.png'
import Daipingjia from '../../assets/images/Daipingjia.png'
import ServiceImg1 from '../../assets/images/service-img1.png'
import ServiceImg2 from '../../assets/images/service-img2.png'
import ServiceImg3 from '../../assets/images/service-img3.png'

import './My.css'

const My = (props) => {
  const { } = props
  const [homeServiceData, sethomeServiceData] = useState([
    {
      id: 1,
      title: '待付款',
      img: `${Daifukuan}`
    },
    {
      id: 2,
      title: '待发货',
      img: `${Daifahuo}`
    },
    {
      id: 3,
      title: '待收货',
      img: `${Daishouhuo}`
    },
    {
      id: 4,
      title: '待评价',
      img: `${Daipingjia}`
    }
  ])
  return (
    
     
      <div className='main'>
        <div className='bgimg-my'>
          <div className='my-info'>
            <div className='my-info-head'>
              <div className='my-info-name'>
                <div className='image-head'></div>
                <div className='my-head-text'>最后的轻语</div>
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
                  <li className="homeservice-item-my" key={index}>
                    <div className="homeservice-img__box">
                      {/* {console.log(item.img, '---------------------') } */}
                      <img src={item.img} alt="" className="homeservice-img-my" />
                    </div>
                    <div className="homeservice-text-my">{item.title}</div>
                  </li>
                )
              })
            }
          </div>
          <div className='order-list'>
            {
              homeServiceData.map((item, index) => {
                return (
                  <li className="homeservice-item-my" key={index}>
                    <div className="homeservice-img__box">
                      {/* {console.log(item.img, '---------------------') } */}
                      <img src={item.img} alt="" className="homeservice-img-my" />
                    </div>
                    <div className="homeservice-text">{item.title}</div>
                  </li>
                )
              })
            }
          </div>
        </div>
        <div className='service-box'>
          <div className='service-left'>
            <div className='service-left-img1'>
              <img src={ServiceImg1} alt="" />
            </div>
            <div className='service-left-title'>联系客服</div>
            <div className='service-left-text'>帮助投诉找平台客服</div>
          </div>
          <div className='service-mid'>
            <div className='service-left-img2'>
              <img src={ServiceImg2} alt="" />
            </div>
            <div className='service-left-title'>联系客服</div>
            <div className='service-left-text'>一键发布批量收</div>
          </div>
          <div className='service-right'>
            <div className='service-left-img3'>
              <img src={ServiceImg3} alt="" />
            </div>
            <div className='service-left-title'>联系客服</div>
            <div className='service-left-text'>首单返利等你拿</div>
          </div>
        </div>
        <div className='my-auction'>
          <div className='my-auction-content'>
            <div className='my-auction-left'>
              我的拍卖
            </div>
            <div className='my-auction-right'>
              <div className='my-auction-right-text'>查看我的竞拍/交易</div>
              <div className='my-auction-right-border'></div>
            </div>
          </div>
        </div>
        <div className='my-service'>
          <div className='order-title'>
            <div className='order-text'>我的服务</div>
          </div>
          <div className='order-list'>
            {
              homeServiceData.map((item, index) => {
                return (
                  <li className="homeservice-item-my" key={index}>
                    <div className="homeservice-img__box">
                      {/* {console.log(item.img, '---------------------') } */}
                      <img src={item.img} alt="" className="homeservice-img-my" />
                    </div>
                    <div className="homeservice-text">{item.title}</div>
                  </li>
                )
              })
            }
          </div>
        </div>
        <div className='my-recommend'>
          <div className='recommend-title'>——  为你推荐  ——</div>
          <div >
            
          </div>
        </div>
        <div className='more-my'></div>
      </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, {})(memo(My))
