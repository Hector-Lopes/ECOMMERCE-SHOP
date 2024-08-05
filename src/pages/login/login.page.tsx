import { BsGoogle } from 'react-icons/bs'
import CustomButton from '../../components/custom-button/custom-button'
import Header from '../../components/header/header.component'
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
          <CustomButton startIcon={<BsGoogle size={25}></BsGoogle>}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer></LoginInputContainer>
          <LoginInputContainer></LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
