import React from 'react'
import { Top, TopItem } from './listData.style'
import { NavLink } from 'react-router-dom'
import ListItem from './listitem/ListItem'

const ListData = (props) => {
    const { list } = props
    // console.log(list, '------------------')
    return (
        <>
            <Top>
                <NavLink to="/home/main" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">新书广场</div>
                            <div className="personal-info-num-name">聚划算</div>
                        </div>
                    </TopItem>
                </NavLink>
                {/*  */}
                <NavLink to="/a" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">国学经典</div>
                            <div className="personal-info-num-name">聚经典</div>
                        </div>
                    </TopItem>
                </NavLink>
                <NavLink to="/b" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">艺文集览</div>
                            <div className="personal-info-num-name">聚文艺</div>
                        </div>
                    </TopItem>
                </NavLink>
                <NavLink to="/c" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">旧集追踪</div>
                            <div className="personal-info-num-name">聚全</div>
                        </div>
                    </TopItem>
                </NavLink>
            </Top>
            {
                list.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))
            }
        </>
    )
}

export default ListData