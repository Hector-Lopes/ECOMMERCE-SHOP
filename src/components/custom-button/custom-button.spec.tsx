import CustomButton from './custom-button'
import { render } from '@testing-library/react'

describe('Custom Button', () => {
  it('should test if render children', () => {
    const { getByText } = render(<CustomButton>Click Me</CustomButton>)

    getByText('Click M')
  })
})
