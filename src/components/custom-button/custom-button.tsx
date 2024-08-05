import { CustomButtonContainer, IconContainer } from './custom-button.styles'

interface CustomButtonprops {
  children: React.ReactNode
  startIcon?: React.ReactNode
}

const CustomButton: React.FC<CustomButtonprops> = ({ children, startIcon }) => {
  return (
    <CustomButtonContainer>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
