import { BsGoogle } from 'react-icons/bs'
import { FiLogIn} from 'react-icons/fi'

//Components
import CustomButton from '../../components/custom-button/custom-button'
import Header from '../../components/header/header.component'

//styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.stykes'

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={25} ></BsGoogle>}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer></LoginInputContainer>
          <LoginInputContainer></LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={25}></FiLogIn>}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
