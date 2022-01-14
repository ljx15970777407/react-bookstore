import React, { useEffect, memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Scroll from '../../baseUI/scroll'
import './Main.css'
import * as api from '@/api'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
// import Classify from
//     '../../components/main/classify/Classify.jsx'
import RotationChart from
    '../../components/main/rotationChart/RotationChart.jsx'
// import MenuBar from
//     '../../components/main/menuBar/MenuBar.jsx'
import ImgList from
    '../../components/main/imgList/ImgList.jsx'
import ImgList2 from
    '../../components/main/imgList2/ImgList2.jsx'
import SearchInput from
    '../../components/SearchInput/SearchInput.jsx'
import MainPopup from
    '../../components/mainPopup/MainPopup.jsx'
import HomeService from
    '@/components/main/homeService/HomeService.jsx'
import FrameLayout from
    '../../components/main/frameLayout/FrameLayout.jsx'
import Commodity from
    '../../components/main/commodity/Commodity.jsx'
import Auction from
    '../../components/main/auction/Auction.jsx'
import ListData from
    '../../components/main/listData/ListData.jsx'
import { forceCheck } from 'react-lazyload'

const Main = (props) => {
    // 状态
    let [list, setList] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [display, setDisplay] = useState(false)
    const history = useHistory()
    const { maindata } = props
    // action 
    const { getMainDataDispatch } = props
    const { rotationImg = [] } = maindata
    let [page, setPage] = useState(1)
    // console.log(maindata, '////////////');
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
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
        fetchList()
    }, [])

    useEffect(() => {
        fetchList()
    }, [page])
    
    const handleOnclick = () => {
        // popun 组件的显示已否
        setShowPopup(!showPopup)
    }

    const handlePullUp = () => {
        setPage(++page)
    }

    const handlePullDown = () => {
        // console.log('下拉刷新');
    }

    return (
        <div className='main'>
            <SearchInput
                handleOnclick={() => { handleOnclick() }}
                searchBoxHandleOnclick={() => history.push('/search')}
            />
            <Scroll
                direction={"vertical"}
                refresh={false}
                onScroll={
                    (e) => {
                        // console.log(e.y);
                        if (e.y < -1142) {
                            setDisplay(true)
                        } else {
                            setDisplay(false)
                        }
                        forceCheck()
                    }
                }
                pullUp={handlePullUp}
                pullDown={handlePullDown}
            >
                <div className='main-padding'>
                    <div className='white-box'>
                        <div className='classify'></div>
                        {/* <Classify classify={classify} /> */}
                        <RotationChart rotationImg={rotationImg} />
                        {/* <MenuBar menuBarData={menuBarData} /> */}
                        <ImgList />
                        <Commodity />
                        <ImgList2 />
                    </div>
                    <Auction />
                    <HomeService />
                    <ListData list={list} />
                    {/* <FrameLayout /> */}
                </div>
            </Scroll>
            <MainPopup
                handleOnclick={handleOnclick}
                display={showPopup} />
        </div>
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
export default connect(mapStateToPorps, mapStateToDispatch)(memo(Main))