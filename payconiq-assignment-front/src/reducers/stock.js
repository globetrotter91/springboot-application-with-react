import { SET_STOCKS_IN_STORE } from './../constants' ;

export default (state = [], action={}) => {
    switch(action.type){
        case SET_STOCKS_IN_STORE:
            return {
                stocks: action.payload
            }
        default: return state;
    }
}
