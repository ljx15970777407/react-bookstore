import React, {memo} from 'react'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import HeaderComponent from '../../common/headerComponent/HeaderComponent.jsx'

const Info = (props) => {
    const handleShare = () => {
        // to be continue share
    }

    return (
        <>
            <HeaderComponent title="购物车" handleShare={handleShare} />
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                   
                </div>

            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(memo(Info))
