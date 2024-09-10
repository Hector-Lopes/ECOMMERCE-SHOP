import { FunctionComponent, useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/user.context'
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'

import { useAppSelector } from '../hooks/redux.hooks'

interface AuthenticantionProps {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticantionProps> = ({
  children
}) => {
  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(true)
      setTimeout(() => {
        navigate('/login')
        setLoading(false)
      }, 3000)
    }
  }, [isAuthenticated])
  return (
    <>
      {isLoading ? (
        <>
          <Header></Header>
          <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...'></Loading>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
export default AuthenticationGuard
