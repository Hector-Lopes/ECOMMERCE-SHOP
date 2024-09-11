import CartProduct from '../../../types/cart.types'
import Product from '../../../types/products.types'
import CartActionTypes from './cart.action-types'

export const toggleCart = () => ({ type: CartActionTypes.toggleCart })

export const addProduct = (payload: Product) => ({
  type: CartActionTypes.addProducToCart,
  payload
})
