import { useState } from 'react'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/products.types'
import CartActionTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const InitialState: InitialState = {
  isVisible: false,
  products: []
}

const cartReducer = (state = InitialState, action: any): InitialState => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    case CartActionTypes.addProducToCart: {
      const actulProduct = action.payload
      const ProductsAlredyExists = state.products.some(
        (item) => item.id == actulProduct.id
      )
      console.log(ProductsAlredyExists, 'here')
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
    case CartActionTypes.removeProducToCart: {
      let actulProduct = action.payload

      return {
        ...state,
        products: state.products.filter((item) => item.id !== actulProduct.id) // ele retorna todos os produtos que tenham ID Diferente do enviado
      }
    }
    case CartActionTypes.increaseProductQuantity: {
      return {
        ...state,
        products: state.products.map((item) =>
          item.id == action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }
    case CartActionTypes.decreaseProductQuantity: {
      return {
        ...state,
        products: state.products.map((item) =>
          item.id == action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    }
    case CartActionTypes.clearProducts: {
      return { ...state, products: [] }
    }
    default:
      return state
  }
}

export default cartReducer
