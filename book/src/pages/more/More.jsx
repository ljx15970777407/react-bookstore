import React, { memo, useState, useEffect } from 'react';
// import Scroll from '../../../baseUI/scroll'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypesMain from '@/pages/main/store/actionCreators'
import * as actionTypesDetail from '@/pages/details/store/actionCreators'
import * as api from '@/api'
import imgSearch from '../../assets/images/搜索.png'
import imgShopCar from '../../assets/images/购物车.png'
import './More.css'
import HeaderComponent from '@/common/headerComponent/HeaderComponent.jsx'
import { Item } from './More.style'

const More = (props) => {

    const { handleOnclick, SearchBoxhandleOnclick, AddShopcarDispatch, gotoDetailDispatch } = props;
    const handleShare = () => {
        // to be continue share
    }
    let [list, setList] = useState([])
    const { maindata } = props
    const { homeServiceData = [] } = maindata
    // console.log(homeServiceData, '=======================');
    const history = useHistory()
    const gotoSearch = () => {
        history.push('/search')
    }
    // const AddShopcar = (item) => {
    //     console.log(item);
    //     AddShopcarDispatch(item)
    // }
    const { getMainDataDispatch } = props
    let [page, setPage] = useState(1)
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
    const gotoDetail = (item) => {
        gotoDetailDispatch(item)
        history.push(`/detail/${item.id}`)
    }
    return (
        <>
            <HeaderComponent title='好书推荐' handleShare={handleShare} />
            <div className='search-input-box'>
                <div className="search-place-more">
                    <p className='search-border-more'>
                        <img className='search-img-more' src={imgSearch}></img>
                    </p>
                    <input onClick={() => gotoSearch()} type="text" placeholder='商品名称 作者 出版社 ISBN' onFocus={SearchBoxhandleOnclick} />
                </div>
            </div>
            <div className='more-main'>
                <div className='more-top-text'>
                    好书推荐
                </div>
                <Item homeServiceData={homeServiceData}>
                    {
                        homeServiceData.map((item, index) => {
                            return (
                               
                                    
                                <div className="homeservice-item-more" onClick={() => gotoDetail(item)} key={index}>
                                    <div className="homeservice-img__box-more">
                                        <img src={item.img} alt="" className="homeservice-img-more" />
                                    </div>
                                    <div className='more-book-text'>
                                        <div className="homeservice-text-more">{item.title}</div>
                                        <div className="homeservice-author-more">{item.author}</div>
                                        <div className="homeservice-price-more">{item.price}
                                            <div className='addShopCar'>
                                                <img src={imgShopCar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </Item>
            </div>
        </>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypesMain.getMainData())
        },
        AddShopcarDispatch(item) {
            dispatch(actionTypesDetail.addShopCar(item))
        },
        gotoDetailDispatch(item) {
            dispatch(actionTypesDetail.gotodetail(item))
        }
    }
}
const mapStateToPorps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
export default connect(mapStateToPorps, mapStateToDispatch)(memo(More))