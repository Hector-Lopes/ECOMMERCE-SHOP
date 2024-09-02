import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.styles'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item.styles.ts/cart-item.component'
const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product}></CartItem>
              ))}
            </CheckoutProducts>
            <CheckoutTotal>Tota: R${productsTotalPrice}</CheckoutTotal>
            <CustomButton startIcon={<BsBagCheck></BsBagCheck>}>
              Finalizar Compra
            </CustomButton>
          </>
        ) : (
          <>
            <p>Seu Carriho está vazio</p>
          </>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
