import { getByPlaceholderText, render } from "@testing-library/react"
import CustomInput from "./custom-input.component"
import colors from "../../theme/theme.colors"

describe('Custom Input',()=>{
    it('should render with error if hasError is true',()=>{
        const {getByPlaceholderText} = render(<CustomInput placeholder="Lorem Ipsum" hasError={true}></CustomInput>)
        const input = getByPlaceholderText('Lorem Ipsum')
   
   expect(input).toHaveStyle({border:`2px solid ${colors.error}` })
    })
    
})


