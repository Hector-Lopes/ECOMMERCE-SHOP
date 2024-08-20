import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import validator, { isEmail } from 'validator'
import { useForm } from 'react-hook-form'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'
import CustomButton from '../../components/custom-button/custom-button'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

import SignUpForm from '../../types/signupform.types'
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

const SignUpPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setError
  } = useForm<SignUpForm>()

  const wacthPassword = watch('password')
  const HandleSubmitSignUp = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: data.uid,
        firstname: data.name,
        lastname: data.surname,
        email: data.email,
        provider: userCredentials.user.providerId
      })
    } catch (error) {
      console.log(error)
      const _error = error as AuthError
      if (_error.code == AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alredyInUse' })
      }
      // if (_error.code == AuthErrorCodes.WEAK_PASSWORD) {
      //   return setError('password', { type: 'weakPassword' })
      // }
    }
  }
  console.log(errors)
  return (
    <>
      <Header></Header>
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua Conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              {...register('name', { required: true })}
              placeholder='Digite seu nome'
              hasError={!!errors.name}
            ></CustomInput>
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>Nome é obrigatorio</InputErrorMessage>
            )}
            <p>Sobrenome</p>
            <CustomInput
              {...register('surname', { required: true })}
              placeholder='Digite seu sobrenome'
              hasError={!!errors.surname}
            ></CustomInput>
            {errors?.surname?.type === 'required' && (
              <InputErrorMessage>Sobrenome é obrigatorio</InputErrorMessage>
            )}
            <p>E-mail</p>
            <CustomInput
              {...register('email', {
                required: true,
                validate: (value): any => {
                  return validator.isEmail(value)
                }
              })}
              placeholder='Digite seu e-mail'
              hasError={!!errors.email}
            ></CustomInput>
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>Email é obrigatorio</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Coloque E-mail válido</InputErrorMessage>
            )}

            {errors.email?.type === 'alredyInUse' && (
              <InputErrorMessage>Este E-mail já esta em uso</InputErrorMessage>
            )}
            <p>Senha</p>
            <CustomInput
              {...register('password', { required: true, minLength: 6 })}
              placeholder='Digite sua senha'
              hasError={!!errors.password}
              type='password'
            ></CustomInput>
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>Senha é obrigatorio</InputErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                A senha precisa ter 6 caracteres ou mais
              </InputErrorMessage>
            )}
            <p>Confirmção de senha</p>

            <CustomInput
              {...register('passwordconfirm', {
                required: true,
                minLength: 6,
                validate: (value): any => {
                  return value == wacthPassword
                }
              })}
              placeholder='Confirme sua senha'
              hasError={!!errors.passwordconfirm}
              type='password'
            ></CustomInput>
            {errors?.passwordconfirm?.type === 'required' && (
              <InputErrorMessage>
                Confirmção de senha é obrigatorio
              </InputErrorMessage>
            )}
            {errors?.passwordconfirm?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha precisa se igual a senha
              </InputErrorMessage>
            )}
            {errors?.passwordconfirm?.type === 'minLength' && (
              <InputErrorMessage>
                A confirmação de senha precisa ter 6 caracteres ou mais
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton onClick={() => handleSubmit(HandleSubmitSignUp)()}>
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
