import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'

const SignUpPage = () => {
  return (
    <>
      <Header></Header>
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua Conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput placeholder='Digite seu nome'></CustomInput>
            <p>Sobrenome</p>
            <CustomInput placeholder='Digite seu sobrenome'></CustomInput>
            <p>E-mail</p>
            <CustomInput placeholder='Digite seu e-mail'></CustomInput>
            <p>Senha</p>
            <CustomInput placeholder='Digite sua senha'></CustomInput>
            <p>Confirmção de senha</p>
            <CustomInput placeholder='Confirme sua senha'></CustomInput>
          </SignUpInputContainer>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
