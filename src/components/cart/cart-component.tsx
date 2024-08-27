import { FunctionComponent } from 'react'

import {
  CartContainer,
  CartContent,
  CartTitle,
  CartEscapeArea,
  CartTotal
} from './cart.styles'
import CustomButton from '../custom-button/custom-button'

const Cart: FunctionComponent = () => {
  return (
    <CartContainer isVisible={false}>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {/* produtos */}
        <CartTotal>Total: R$999</CartTotal>
        <CustomButton>Ir para o Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
