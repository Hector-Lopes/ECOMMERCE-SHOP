import { getByPlaceholderText, render } from "@testing-library/react"
import CustomInput from "./custom-input.component"
import colors from "../../theme/theme.colors"
import userEvent from "@testing-library/user-event"

describe('Custom Input',()=>{
    it('should render with error style if hasError is true',()=>{
        const {getByPlaceholderText} = render(<CustomInput placeholder="Lorem Ipsum" hasError={true}></CustomInput>)
        const input = getByPlaceholderText('Lorem Ipsum')
   
   expect(input).toHaveStyle({border:`2px solid ${colors.error}` })
    })
    
    it('should render without error style if hasError is false',()=>{
        const {getByPlaceholderText} = render(<CustomInput placeholder="Lorem Ipsum" hasError={false}></CustomInput>)
        const input = getByPlaceholderText('Lorem Ipsum')
   
   expect(input).toHaveStyle({border:`none` })
    })
    
    it('should change value when user types',()=>{
        const {getByPlaceholderText,getByDisplayValue} = render(
            <CustomInput placeholder="Lorem ipsum" hasError={false}></CustomInput>
        )
      const  input = getByPlaceholderText('Lorem ipsum')
     
      userEvent.type(input,'Dolor Sit')

      getByDisplayValue('Dolor Sit')
    
    })



})


