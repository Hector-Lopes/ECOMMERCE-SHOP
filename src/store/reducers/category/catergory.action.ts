import { Dispatch } from 'redux'
import Catergory from '../../../types/category.types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'categories/fecthStart' })

    try {
      const categoriesFromFirestore: Catergory[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())

        dispatch({
          type: 'categories/fetchSuccess',
          payload: categoriesFromFirestore
        })
      })
    } catch (e) {
      console.log(e)
    } finally {
      dispatch({
        type: 'categories/fetchError'
      })
    }
  }
}
