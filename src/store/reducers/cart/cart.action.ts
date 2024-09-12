import CartProduct from '../../../types/cart.types'
import Product from '../../../types/products.types'
import CartActionTypes from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

interface ToggleCartAction {
  type: typeof CartActionTypes.toggleCart
  payload: CartProduct
}

interface AddProductAction {
  type: typeof CartActionTypes.addProducToCart
  payload: CartProduct
}

interface RemProductAction {
  type: typeof CartActionTypes.removeProducToCart
  payload: CartProduct
}

interface IncreaseProductAction {
  type: typeof CartActionTypes.increaseProductQuantity
  payload: CartProduct
}

interface DecreaseProductAction {
  type: typeof CartActionTypes.decreaseProductQuantity
  payload: CartProduct
}

export const addProduct = (payload: CartProduct) => ({
  type: CartActionTypes.addProducToCart,
  payload
})

export const removeProduct = (payload: CartProduct) => ({
  type: CartActionTypes.removeProducToCart,
  payload
})

export const IncreaseProductQuantity = (payload: CartProduct) => ({
  type: CartActionTypes.increaseProductQuantity,
  payload
})

export const DecreaseProductQuantity = (payload: CartProduct) => ({
  type: CartActionTypes.decreaseProductQuantity,
  payload
})

export const ClearProducts = () => ({
  type: CartActionTypes.clearProducts
})

// export type CartActions =
//   | DecreaseProductAction
//   | IncreaseProductAction
//   | RemProductAction
//   | AddProductAction
//   | ToggleCartAction
