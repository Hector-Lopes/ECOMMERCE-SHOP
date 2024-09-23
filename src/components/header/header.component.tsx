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
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/toolkit/user/user.slice'
import { useAppSelector } from '../../hooks/redux.hooks'
import { ToggleCart } from '../../store/toolkit/cart/cart.slice'
import { selectProductsCount } from '../../store/reducers/cart/cart.selectors'

const Header = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  const productsTotal = useAppSelector(selectProductsCount)

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
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(ToggleCart())
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
        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsTotal}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
