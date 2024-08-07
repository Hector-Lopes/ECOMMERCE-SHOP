import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
//Components
import CustomButton from '../../components/custom-button/custom-button'
import Header from '../../components/header/header.component'

//styles
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.stykes'
import CustomInput from '../../components/custom-input/custom-input.component'

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log(data)
  }
  console.log(errors, 'erro')

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
              {...register('email', { required: true })}
            ></CustomInput>
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder='Digite sua senha'
              hasError={!!errors?.password}
              {...register('password', { required: true })}
            ></CustomInput>
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
