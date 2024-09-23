import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CartProduct from '../../../types/cart.types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const InitialState: InitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: InitialState,
  reducers: {
    ToggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    AddProducToCart: (state, action: PayloadAction<CartProduct>) => {
      const ProductsAlredyExists = state.products.some(
        (item) => item.id == action.payload.id
      )
      if (ProductsAlredyExists) {
        state.products = state.products.map((item) =>
          item.id == action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }]
      // monta array com valores anteriores mais action.payload que e valor que vem do dispatch colocando o quantity já que ele não vem com valor
    },
    RemoveProducToCart: (state, action: PayloadAction<CartProduct>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      )
    },

    IncreaseProductQuantity: (state, action: PayloadAction<CartProduct>) => {
      state.products = state.products.map((item) =>
        item.id == action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item }
      )
    },
    DecreaseProductQuantity: (state, action: PayloadAction<CartProduct>) => {
      state.products = state.products.map((item) =>
        item.id == action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item }
      )
    },
    ClearProducts: (state) => {
      state.products = []
    }
  }
})

export const {
  AddProducToCart,
  ClearProducts,
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  RemoveProducToCart,
  ToggleCart
} = cartSlice.actions

export default cartSlice.reducer
