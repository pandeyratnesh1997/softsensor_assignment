import * as types from './actionTypes';

const initstate = {
    CartItems : []
}

export const reducer = (state = initstate, action)=>{
   

    switch(action.type){
        case types.ADD_TO_CART :{
            console.log(action.payload)
            
            return {
                ...state,
                CartItems : [...state.CartItems, action.payload]
            }
        }
        default : {
            return state
        }
    }
}