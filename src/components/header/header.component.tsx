import { BsCart3 } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()
  const handdleLoginClick = () => {
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handdleLoginClick}>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
