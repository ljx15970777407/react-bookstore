import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    num: 99,
    index: 0, // tabbar哪个被激活？ 核心状态 ,
    shopCarData:[]
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.SET_INDEX:
            return {...state, index: action.data}
        case actionTypes.SET_NUM:
            return {...state, num: action.data}
        case actionTypes.CHANGE_MAINDATA:
            return { ...state, maindata: action.data }
        case actionTypes.ADD_SHOPCAR:
            console.log(action.data);
            return { ...state, shopCarData: action.data }
        default:
            return state;
    }
}
export default reducer;