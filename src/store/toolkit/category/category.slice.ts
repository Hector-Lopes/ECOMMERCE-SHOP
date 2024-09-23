import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import Catergory from '../../../types/category.types'

export const fetchCategories = createAsyncThunk(
  'categories/fecth',
  async () => {
    const categoriesFromFirestore: Catergory[] = []
    const querySnapshot = await getDocs(
      collection(db, 'categories').withConverter(categoryConverter)
    )
    querySnapshot.forEach((doc) => {
      categoriesFromFirestore.push(doc.data())
    })

    return categoriesFromFirestore
  }
)

export interface InitialState {
  categories: Catergory[]
  isLoading: boolean
}

const InitialState: InitialState = { categories: [], isLoading: false }

const categorySlice = createSlice({
  name: 'category',
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    //loading
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true
    })
    //sucesso
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })
    //erro
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false
    })
  }
})
export default categorySlice.reducer
