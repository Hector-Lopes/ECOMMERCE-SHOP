import { BsCart3 } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'

const Header = () => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  const handdleLoginClick = () => {
    navigate('/login')
  }

  const handdleSignupClick = () => {
    navigate('/sign-up')
  }
  const handleHomeClick = () => {
    navigate('/')
  }
  const handleExploreClick = () => {
    navigate('/explore')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {isAuthenticated !== true && (
          <>
            <HeaderItem onClick={handdleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handdleSignupClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated == true && (
          <>
            <HeaderItem
              onClick={() => {
                signOut(auth)
              }}
            >
              Sair
            </HeaderItem>
            <HeaderItem>
              <BsCart3 size={25} />
              <p style={{ marginLeft: 5 }}>5</p>
            </HeaderItem>
          </>
        )}
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
