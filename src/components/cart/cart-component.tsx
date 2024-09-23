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

import { useDispatch } from 'react-redux'
import { ClearProducts, ToggleCart } from '../../store/toolkit/cart/cart.slice'
import { useAppSelector } from '../../hooks/redux.hooks'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../store/reducers/cart/cart.selectors'

const Cart: FunctionComponent = () => {
  const dispatch = useDispatch()

  const { isVisible, products } = useAppSelector(
    (rootReducer) => rootReducer.cartReducer
  )
  const navigate = useNavigate()

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsTotal = useAppSelector(selectProductsCount)
  const HandleChekoutClick = () => {
    navigate('/checkout')
    dispatch(ToggleCart())
  }
  const HandleCLickOut = () => {
    dispatch(ToggleCart())
  }

  const HandleClearCar = () => {
    dispatch(ClearProducts())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={HandleCLickOut}></CartEscapeArea>
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
