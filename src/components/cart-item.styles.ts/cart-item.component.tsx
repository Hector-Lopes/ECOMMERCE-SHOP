import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import CartProduct from '../../types/cart.types'
import { CartContext } from '../../contexts/cart.context'

interface CartItemProps {
  product: CartProduct
}
const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    DeleteProductToCart,
    IncreaseProductQuantity,
    DecreaseProductQuantity
  } = useContext(CartContext)

  const HandleProductFromCart = () => {
    DeleteProductToCart(product.id)
  }
  const HandleToIncreaseQuantity = () => {
    IncreaseProductQuantity(product)
  }

  const HandleToDecreaseQuantity = () => {
    DecreaseProductQuantity(product)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl}></CartItemImage>
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={HandleToDecreaseQuantity}
          ></AiOutlineMinus>
          <p>{product.quantity}</p>
          <AiOutlinePlus onClick={HandleToIncreaseQuantity}></AiOutlinePlus>
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton onClick={HandleProductFromCart}>
        <AiOutlineClose size={25}></AiOutlineClose>
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
