import * as actionTypes from './constants'
import { reqdetail } from '../../../api/index'

export const changeDetailData = (data) => {
    // console.log('2222222222222222222222222222222222222222');
    return {
        type: actionTypes.CHANGE_DETAIL_DATA,
        data
    }
}

export const getDetailData = () => {
    console.log('jinqule');
    // return (dispatch) => {
    //     reqdetail()
    //         .then(res => {
    //             console.log(res, '==========================')
    //             // dispatch(changeDetailData(data.data.homeServiceData))
    //         })
    //         .catch(e = () => {
    //         console.log('chucuole');
    //     })
    // }
    return (dispatch) => {

        console.log('jinqu');
        reqdetail()
            .then((res) => {
                console.log(res, 'res..............');
                // dispatch(changeMainData(res.data.data))
            })
            .catch((e) => {
                console.log('error', e);
            })
    }
}



export const gotodetail = (data) => {
    return {
        type: actionTypes.GOTO_DETAIL,
        data
    }
}
