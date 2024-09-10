import CartProduct from '../../../types/cart.types'
import CartActionTypes from './cart.action-types'

export const toggleCart = () => ({ type: CartActionTypes.toggleCart })

export const addProduct = (payload: CartProduct) => ({
  type: CartActionTypes.addProducToCart,
  payload
})
