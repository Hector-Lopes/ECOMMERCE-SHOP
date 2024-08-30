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
  addProductToCart: (product: Product) => void
  DeleteProductToCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  DeleteProductToCart: () => {}
})

const CartContextProvider: React.FC<ICartContextChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])
  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }
  const addProductToCart = (product: Product) => {
    const ProductsAlredyExists = products.some((item) => item.id == product.id)

    if (ProductsAlredyExists) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    setProducts((prevstate) => [...prevstate, { ...product, quantity: 1 }])
  }
  const DeleteProductToCart = (productId: string) => {
    products.filter((item) => item.id !== productId)
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        DeleteProductToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
