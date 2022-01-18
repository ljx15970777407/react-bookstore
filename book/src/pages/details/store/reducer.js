import * as actionTypes from './constants'

const defaultState = {
    detailData: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            // console.log(state,'state________________');
            return {
                ...state,
                detailData: action.data
            }
        case actionTypes.GOTO_DETAIL:
            // console.log(state, 'W@@@@');
            state.detailData.push(action.data)
            return {
                ...state
            }
            
        default:
            return state
    }
}

export default reducer