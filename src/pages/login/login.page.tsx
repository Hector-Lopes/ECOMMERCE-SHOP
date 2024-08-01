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
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer></LoginInputContainer>
          <LoginInputContainer></LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
