import User from '../../types/user'

interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
}

const InitialState: InitialState = {
  currentUser: null,
  isAuthenticated: false
}

const userReducer = (state = InitialState, action: any): InitialState => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload, isAuthenticated: true }
    case 'LOGOUT_USER':
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}

export default userReducer
