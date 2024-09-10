import { useState } from 'react'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/products.types'
import CartActionTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  productsTotal: number
}

const InitialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsTotal: 0
}

const cartReducer = (state = InitialState, action: any): InitialState => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    case CartActionTypes.addProducToCart: {
      const actulProduct = action.payload
      const ProductsAlredyExists = state.products.some(
        (item) => item.id == actulProduct
      )

      if (ProductsAlredyExists) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id == actulProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        products: [...state.products, { ...actulProduct, quantity: 1 }]
      }
    }
    default:
      return { ...state }
  }
}

export default cartReducer
