import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorMessageProps {
  children: React.ReactNode
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
