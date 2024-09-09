import User from '../../../types/user'
import UserAcitonTypes from './user.action-types'

export const loginUser = (payload: User) => ({
  type: UserAcitonTypes.LOGIN,
  payload
})

export const logoutUser = () => ({
  type: UserAcitonTypes.LOGOUT
})
