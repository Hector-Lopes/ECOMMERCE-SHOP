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
import { useNavigate } from 'react-router-dom'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsTotal } =
    useContext(CartContext)
  const navigate = useNavigate()

  const HandleChekoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}></CartEscapeArea>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
        {productsTotal > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}
        {productsTotal > 0 && (
          <CustomButton
            onClick={HandleChekoutClick}
            startIcon={<BsCartCheck></BsCartCheck>}
          >
            Ir para o Checkout
          </CustomButton>
        )}

        {productsTotal == 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
