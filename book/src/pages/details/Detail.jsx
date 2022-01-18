import React, { useEffect, memo, useState} from 'react';
import { connect } from 'react-redux'
import './Detail.css'
import imgShopCar from '../../assets/images/购物车.png'
import * as actions from './store/actionCreators'
import { useLocation } from 'react-router-dom';
import HeaderComponent from '../../common/headerComponent/HeaderComponent.jsx'

const Detail = (props) => {
    const { data=[] } = props
    let { pathname } = useLocation()
    const [index,setIndex] = useState(0)
    
    useEffect(() => {
        let id = pathname.split('/detail/')[1] || undefined;
        setIndex(data.findIndex(item => item.id == id))
    }, [])
    const handleShare = () => {
        // to be continue share
    }

    return (
        <div>
            <HeaderComponent title={data[index]?.title} handleShare={handleShare} />
            <div className='detail-bookimg'>
                <img src={data[index]?.img} alt="" />
            </div>
            <div className='detaile-bookinfo'>
                <div className='detaile-bookname'>
                    书名: {data[index]?.title}
                </div>
                <div className='detaile-bookauthor'>
                    {data[index]?.author}
                </div>
                <div className='detail-price'>
                    <div className='detail-price-text'>{data[index]?.price}</div>
                    <button>加入购物车</button>
                    <div className='detail-price-img'><img src={imgShopCar} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToPorps = (state) => {
    // console.log(state,'2222222222222222');
    return {
        data: state.detail.detailData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData(id) {
            dispatch(actions.changeDetailData(id))
        }
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(memo(Detail)) 
