import React, {memo} from 'react';
import './Server.css'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll'

const Server = (props) => {
    const { category } = props

    return (
        <div className='main'>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div className='test'>
                    server
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