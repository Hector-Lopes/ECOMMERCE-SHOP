import { FunctionComponent ,InputHTMLAttributes} from 'react'

//styles
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps  extends InputHTMLAttributes<HTMLInputElement>{ 
    hasError?:boolean
}



const CustomInput:React.FC  <CustomInputProps> = ({ hasError,...rest}) => { 
    return (
        <CustomInputContainer hasError={hasError} {...rest} ></CustomInputContainer>
    )
}



export default CustomInput