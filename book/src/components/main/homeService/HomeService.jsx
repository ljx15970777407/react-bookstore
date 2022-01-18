import React, { memo, useState, useEffect } from 'react';
import Scroll from '../../../baseUI/scroll'
import imgMore from '@/assets/images/大于号.png'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from '@/pages/Main/store/actionCreators'
import * as api from '@/api'

import { Tab, Top, Item } from './HomeService.style'
function HomeService(props) {
  let [list, setList] = useState([])
  const { maindata } = props
  const { homeServiceData = [] } = maindata
  // console.log(homeServiceData, '=======================');
  const history = useHistory()
  let [page, setPage] = useState(1)
  const { getMainDataDispatch } = props
  
  const fetchList = () => {
    api
      .reqlist(page)
      .then(res => {
        setList([
          ...list,
          ...res.data.data.list
        ])
      })
  }
  const gotoMore = () => {
    // console.log("@@@@@@@@@@@@@@@");
    history.push('/more')
  }
  useEffect(() => {
    if (!maindata.length) {
      getMainDataDispatch()
    }
    fetchList()
  }, [])
  return (
    <Tab>
      <Top>
        <div className="homeservice-left">
          <div className="homeservice-title">好书推荐</div>
          <div className="homeservice-more" onClick={() => gotoMore()}>
            <div className='more-text' >更多</div>
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
        <Item homeServiceData={homeServiceData}>
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

const mapStateToDispatch = (dispatch) => {
  return {
    getMainDataDispatch() {

      dispatch(actionTypes.getMainData())
    }
  }
}
const mapStateToPorps = (state) => {
  return {
    maindata: state.main.maindata
  }
}
export default connect(mapStateToPorps, mapStateToDispatch)(memo(HomeService))
