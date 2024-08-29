import { FunctionComponent } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import CartProduct from '../../types/cart.types'

interface CartItemProps {
  product: CartProduct
}
const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl}></CartItemImage>
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20}></AiOutlineMinus>
          <p>{product.quantity}</p>
          <AiOutlinePlus></AiOutlinePlus>
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton>
        <AiOutlineClose size={25}></AiOutlineClose>
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
