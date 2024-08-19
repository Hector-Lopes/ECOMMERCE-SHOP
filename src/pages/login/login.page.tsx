import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
//Components
import CustomButton from '../../components/custom-button/custom-button'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
//styles
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.stykes'
import CustomInput from '../../components/custom-input/custom-input.component'
import validator, { isEmail } from 'validator'

import LoginForm from '../../types/Login.types'
import {
  signInWithEmailAndPassword,
  AuthErrorCodes,
  AuthError
} from 'firebase/auth'
import { auth } from '../../config/firebase.config'

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<LoginForm>()

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      console.log(error)
      const _error = error as AuthError
      if (_error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError('password', { type: 'mismacth' })
      }
    }
  }

  return (
    <>
      <Header></Header>
      <LoginContainer>
        <div className='teste'>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={25}></BsGoogle>}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder='Digite seu e-mail'
              hasError={!!errors?.email}
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            ></CustomInput>
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email e obrigatorio</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira e-mail válido
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder='Digite sua senha'
              hasError={!!errors?.password}
              {...register('password', { required: true })}
            ></CustomInput>
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatoria</InputErrorMessage>
            )}
            {errors?.password?.type === 'mismacth' && (
              <InputErrorMessage>A senha ou email é inválida</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={25}></FiLogIn>}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
        </div>
      </LoginContainer>
    </>
  )
}

export default LoginPage
