import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  items: []
})

const add=(state,action)=>{
  console.log("Add to cart");
  console.log(action.item);
  newState=JSON.parse(JSON.stringify(state))

  if(!newState.items){
    newState={
      items:[]
    }
  }
  newState.items.push(action.item);
  console.log(newState);
  return state.merge(newState)
}

const clear=(state,action)=>{
  console.log("Clear cart");
  return {}
}

// Update cart
const update = (state, action) =>updateFun(state, action);
const updateFun=function(state, action) {
  console.log(action.index)
  console.log(action.qty)
  newState=JSON.parse(JSON.stringify(state))
  if(action.qty==0){
      newState.items.splice(action.index, 1);
  }else{
      newState.items[action.index].qty+=action.qty;
      if(newState.items[action.index].qty==0){
        newState.items.splice(action.index, 1);
      }
  }

  console.log(newState);
  return state.merge(newState)
}






// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CART_UPDATE]: update,
  [Types.CART_ADD]: add,
  [Types.CART_CLEAR]:clear
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
