import { CustomButtonContainer, IconContainer } from './custom-button.styles'
import { ButtonHTMLAttributes} from 'react'

interface CustomButtonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  startIcon?: React.ReactNode
}

const CustomButton: React.FC<CustomButtonprops> = ({ children, startIcon ,... rest }) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
