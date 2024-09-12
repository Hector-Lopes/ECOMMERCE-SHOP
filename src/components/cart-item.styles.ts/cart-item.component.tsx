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
import { useDispatch } from 'react-redux'
import {
  removeProduct,
  DecreaseProductQuantity,
  IncreaseProductQuantity
} from '../../store/reducers/cart/cart.action'

interface CartItemProps {
  product: CartProduct
}
const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const HandleDeleteProduct = () => {
    dispatch(removeProduct(product))
  }

  const HandleToIncreaseQuantity = () => {
    dispatch(IncreaseProductQuantity(product))
  }

  const HandleToDecreaseQuantity = () => {
    dispatch(DecreaseProductQuantity(product))
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
      <RemoveButton onClick={HandleDeleteProduct}>
        <AiOutlineClose size={25}></AiOutlineClose>
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
