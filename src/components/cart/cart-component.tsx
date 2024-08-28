import { FunctionComponent, useContext } from 'react'

import { BsCartCheck } from 'react-icons/bs'
import {
  CartContainer,
  CartContent,
  CartTitle,
  CartEscapeArea,
  CartTotal
} from './cart.styles'
import CustomButton from '../custom-button/custom-button'
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}></CartEscapeArea>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {/* produtos */}
        <CartTotal>Total: R$999</CartTotal>
        <CustomButton startIcon={<BsCartCheck></BsCartCheck>}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
