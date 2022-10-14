import * as types from './actionTypes';

export const addToCart = (payload) => (dispatch) =>{
    console.log(2)
    dispatch({type : types.ADD_TO_CART, payload : payload});

}