import Catergory from '../../../types/category.types'
import CategoryActionType from './category.action-types'

interface InitialState {
  categories: Catergory[]
  isLoading: boolean
}

const InitialState: InitialState = {
  categories: [],
  isLoading: false
}

const categoryReducer = (state = InitialState, action: any): InitialState => {
  switch (action.type) {
    case CategoryActionType.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }
    case CategoryActionType.CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false }
    case CategoryActionType.CATEGORIES_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default categoryReducer
