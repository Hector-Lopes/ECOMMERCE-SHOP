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
import CustomInput from '../../components/custom-input/custom-input.component'

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
          <LoginInputContainer>
          <p>E-mail</p>
          <CustomInput placeholder='Digite seu e-mail'></CustomInput>
          </LoginInputContainer>
          <LoginInputContainer>
          <p>Senha</p>
          <CustomInput placeholder='Digite sua senha'></CustomInput>
          </LoginInputContainer>
          
          <CustomButton startIcon={<FiLogIn size={25}></FiLogIn>}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
