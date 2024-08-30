import { createContext, useMemo, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/products.types'

interface ICartContextChildren {
  children: React.ReactNode
}

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  DeleteProductToCart: (productId: string) => void
  IncreaseProductQuantity: (product: Product) => void
  DecreaseProductQuantity: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  toggleCart: () => {},
  addProductToCart: () => {},
  DeleteProductToCart: () => {},
  IncreaseProductQuantity: () => {},
  DecreaseProductQuantity: () => {}
})

const CartContextProvider: React.FC<ICartContextChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((accomulator, product) => {
      return accomulator + product.price * product.quantity
    }, 0)
  }, [products])
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
    setProducts(products.filter((item) => item.id !== productId))
  }

  const IncreaseProductQuantity = (product: Product) => {
    // setProducts((products) =>
    //   products.map((product) =>
    //     product.id === productId
    //       ? { ...product, quantity: product.quantity + 1 }
    //       : product
    //   )
    // )
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
  }

  const DecreaseProductQuantity = (product: Product) => {
    // setProducts((products) =>
    //   products
    //     .map((product) =>
    //       product.id === productId
    //         ? { ...product, quantity: product.quantity - 1 }
    //         : product
    //     )
    //     .filter((product) => product.quantity > 0)
    // )
    const ProductsAlredyExists = products.some((item) => item.id == product.id)
    if (ProductsAlredyExists) {
      setProducts((prevState) =>
        prevState.map((item) =>
          item.id == product.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        DeleteProductToCart,
        IncreaseProductQuantity,
        DecreaseProductQuantity,
        productsTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
