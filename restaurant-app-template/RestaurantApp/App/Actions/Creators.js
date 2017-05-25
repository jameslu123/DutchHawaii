import Types from './Types'

const startup = () => ({ type: Types.STARTUP })



const updateCart = (index,qty) => ({ type: Types.CART_UPDATE,index,qty})
const addCart = (item) => ({ type: Types.CART_ADD,item})
const clearCart = () => ({ type: Types.CART_CLEAR})



/**
 Makes available all the action creators we've created.
 */
export default {
  updateCart,
  addCart,
  clearCart,
  startup

}
