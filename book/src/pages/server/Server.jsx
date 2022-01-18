import React, {memo, useState} from 'react';
import './Server.css'
import { connect, useStore } from 'react-redux'
import { useHistory } from 'react-router-dom';
import imgSearch from '../../assets/images/搜索.png'
import Scroll from '../../baseUI/scroll'
import HeaderComponent from '../../common/headerComponent/HeaderComponent.jsx'

const Server = (props) => {
    // const { category } = props
    const { SearchBoxhandleOnclick } = props;
    const handleShare = () => {
        // to be continue share
    }
    const history = useHistory()
    const gotoSearch = () => {
        history.push('/search')
    }
    const [allClassList] = useState([
        {
            id: 1,
            name: '推荐分类'
        },
        {
            id: 2,
            name: '线装古籍'
        },
        {
            id: 3,
            name: '民国旧书'
        },
        {
            id: 4,
            name: '期刊报纸'
        },
        {
            id: 5,
            name: '外文原版'
        },
        {
            id: 6,
            name: '国学古籍'
        },
        {
            id: 7,
            name: '收藏鉴赏'
        },
        {
            id: 8,
            name: '小说文学'
        },
        {
            id: 9,
            name: '历史地理'
        }
    ])
    const [bookList] = useState([
        {
            "id": 1,
            "title": "青城",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/bc2e/bc2ee73daa27358606a429091c61857d_0_1_300_300.jpg"
        },
        {
            "id": 2,
            "title": "六朝诗学论集",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/1767/176757ddfe912eca8fff30b0991de907_0_1_300_300.jpg"
        },
        {
            "id": 3,
            "title": "小说史学面面观",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/44be/44be9bacec7a9f2244c0138835b04ab1_0_1_300_300.jpg"
        },
        {
            "id": 4,
            "title": "天吾手记",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/ac0a/ac0a688ae7c7a0f2ec5051e44866e754_0_1_300_300.jpg"
        },
        {
            "id": 5,
            "title": "感知·理知·自我认知",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/28ea/28ea8d8e3e6457a5dea3a689153e46c4_0_1_300_300.jpg"
        }
    ])
    const [bookList2] = useState([
        {
            "id": 6,
            "title": "唐代女道士的生命之旅",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8cfd/8cfd7213ee23ae49dc40fbb0fa5e605d_0_1_300_300.jpg"
        },
        {
            "id": 7,
            "title": "1898年的夏日：一个德国记者的中国观察",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c2f9/c2f9ffaa38dc695b66e94931c8690248_0_1_300_300.jpg"
        },
        {
            "id": 8,
            "title": "天朝的封建官僚机制：古代中国经济和社会研究",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/1a63/1a633aea06806d8911489c51e31c1a03_0_1_300_300.jpg"
        },
        {
            "id": 9,
            "title": "考古中国",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/186b/186b4fea3f651de5352f83e49096c9c9_0_1_300_300.jpg"
        },
        {
            "id": 10,
            "title": "蜀道早期交通考论",
            "img": "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/eb4a/eb4aa02d4ea3650b6a6467b6d674a642_0_1_300_300.jpg"
        }
    ])

    return (
        <div className='main'>
            <HeaderComponent title='全部分类' handleShare={handleShare} />
            <div className='search-class-box'>
                <div className="search-place-class">
                    <p className='search-border-class'>
                        <img className='search-img-class' src={imgSearch}></img>
                    </p>
                    <input onClick={() => gotoSearch()} type="text" placeholder='商品名称 作者 出版社 ISBN' onFocus={SearchBoxhandleOnclick} />
                </div>
            </div>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div className='class-content'>
                    <div className='all-class'>
                        <ul className='allclass-list'>
                            {
                                allClassList.map((item, index) => {
                                    return (
                                        <li className='allclass-list-item' key={index}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='class-one-listitem'>
                        <div className='listitem1'>
                            {
                                bookList.map((item, index) => {
                                    return (
                                        <div key={index} className='one-book'>
                                            <div className='one-book-img'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className='one-book-name'>{item.title}</div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                bookList2.map((item, index) => {
                                    return (
                                        <div key={index} className='one-book'>
                                            <div className='one-book-img'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className='one-book-name'>{item.title}</div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}
export default connect(mapStateToProps, {})(memo(Server))