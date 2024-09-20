import { Dispatch } from 'redux'
import Catergory from '../../../types/category.types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import CategoryActionType from './category.action-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionType.FETCH_CATEGORIES_START })
    try {
      const categoriesFromFirestore: Catergory[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      dispatch({
        type: CategoryActionType.CATEGORIES_SUCCESS,
        payload: categoriesFromFirestore
      })
    } catch (e) {
      console.log(e)
    } finally {
      dispatch({
        type: CategoryActionType.CATEGORIES_FAILURE
      })
    }
  }
}
