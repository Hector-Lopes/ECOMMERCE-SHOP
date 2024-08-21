import { Children, createContext, useState } from 'react'
import User from '../types/user'

interface ContextChildren {
  children: React.ReactNode
}
interface UserProps {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<UserProps>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: React.FC<ContextChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
