import React from 'react';
import './Commodity.css'

function Commodity() {
    return (
        <div className='container1'>
            <div className='title'>在售商品</div>
            <div className='content'>
                <div className='type-block'>
                    <div className='block-type'>                     
                        <div className='book-name'>
                            <div className='block-title'>古籍珍藏</div>
                            <div className='describe'>稀缺</div>
                        </div>
                        <div className='tpye-list-box'>
                            <div className='tpye-list'>
                                <p>线装古籍</p>
                                <p>期刊</p>
                                <p>外文原版</p>
                                <p>收藏鉴赏</p>
                                <p>签名本</p>
                            </div>
                            <div className='tpye-list'>
                                <p>民国旧书</p>
                                <p>报纸</p>
                                <p>国学古典</p>
                                <p>红色文献</p>
                                <p>连环画</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='type-block2'>
                    <div className='block-type2'>
                        <div className='book-name2'>
                            <div className='block-title'>普通图书</div>
                            <div className='describe'>热销</div>
                        </div>
                        <div className='tpye-list-box'>
                            <div className='tpye-list'>
                                <p>文学</p>
                                <p>小说</p>
                                <p>历史</p>
                                <p>童书</p>
                                <p>生活</p>
                            </div>
                            <div className='tpye-list'>
                                <p>艺术</p>
                                <p>教辅教材</p>
                                <p>社会文化</p>
                                <p>哲学心理</p>
                                <p>医药卫生</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commodity