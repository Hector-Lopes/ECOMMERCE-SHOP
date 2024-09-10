import User from '../../../types/user'
import { UserActions } from './user.action'
import UserAcitonTypes from './user.action-types'

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
    case UserAcitonTypes.LOGIN:
      return { ...state, currentUser: action.payload, isAuthenticated: true }
    case UserAcitonTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}

export default userReducer
