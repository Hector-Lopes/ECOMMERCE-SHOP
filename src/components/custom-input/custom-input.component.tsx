import React, { FunctionComponent, InputHTMLAttributes } from 'react'

//styles
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: React.FC<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return (
      <CustomInputContainer {...props} ref={ref as any}></CustomInputContainer>
    )
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
