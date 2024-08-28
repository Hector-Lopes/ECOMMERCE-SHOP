import { createContext, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/products.types'

interface ICartContextChildren {
  children: React.ReactNode
}

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: React.FC<ICartContextChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])
  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
