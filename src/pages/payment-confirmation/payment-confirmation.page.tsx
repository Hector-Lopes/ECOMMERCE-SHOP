import { FunctionComponent, useContext, useEffect } from 'react'
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../../components/header/header.component'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import colors from '../../theme/theme.colors'
import CustomButton from '../../components/custom-button/custom-button'
import { CartContext } from '../../contexts/cart.context'

const PaymentConfirmationPage: FunctionComponent = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const statusOk = searchParams.get('success')
  const statusCancel = searchParams.get('canceled')
  const { ClearProducts } = useContext(CartContext)
  const HandleGoBackToMenu = () => {
    navigate('/')
  }
  useEffect(() => {
    ClearProducts()
  }, [statusOk])
  return (
    <>
      <Header></Header>
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {statusOk == 'true' && (
            <>
              <AiOutlineCheckCircle
                size={120}
                color={colors.success}
              ></AiOutlineCheckCircle>
              <p>Sua Compra foi finalizada com sucesso</p>
            </>
          )}

          {statusCancel == 'true' && (
            <>
              <AiOutlineCloseCircle
                size={120}
                color={colors.error}
              ></AiOutlineCloseCircle>
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor tente
                novamente
              </p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome></AiOutlineHome>}
            onClick={HandleGoBackToMenu}
          >
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
