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
import { CartContext } from '../../contexts/cart.context'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispach = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()
  const { toggleCart, productsTotal } = useContext(CartContext)

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

  const handleSignOutClick = () => {
    dispach({ type: 'LOGOUT_USER' })
    signOut(auth)
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
            <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
          </>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsTotal}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
