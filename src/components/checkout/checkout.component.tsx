import { FunctionComponent, useContext, useEffect, useState } from 'react'
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
import axios from 'axios'
import API_URL from '../../baseurl-axios'
import Loading from '../loading/loading.component'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux.hooks'
import cartReducer from '../../store/reducers/cart/cart.reducer'
import { selectProductsTotalPrice } from '../../store/reducers/cart/cart.selectors'
const Checkout: FunctionComponent = () => {
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const { products } = useAppSelector((rootReducer) => rootReducer.cartReducer)
  const [isLoading, setLoading] = useState(false)
  const handleFinishPurchaseClick = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/create-checkout-session`,
        {
          products: products
        }
      )
      window.location.href = data.url
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {}, [])
  return (
    <>
      <CheckoutContainer>
        {isLoading && <Loading></Loading>}
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product}></CartItem>
              ))}
            </CheckoutProducts>
            <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>
            <CustomButton
              onClick={handleFinishPurchaseClick}
              startIcon={<BsBagCheck></BsBagCheck>}
            >
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
