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
import CartItem from '../cart-item.styles.ts/cart-item.component'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}></CartEscapeArea>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
        <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        <CustomButton startIcon={<BsCartCheck></BsCartCheck>}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
