import React, { Children, createContext, useEffect, useState } from 'react'
import Catergory from '../types/category.types'
import { getDocs, collection } from 'firebase/firestore'

import { categoryConverter } from '../converters/firestore.converters'
import Product from '../types/products.types'
import { db } from '../config/firebase.config'
interface contextCategoryChildren {
  children: React.ReactNode
}
interface CategoryProps {
  categories: Catergory[]
  fechCategories: () => Promise<void>
  isLoading: boolean
}
export const categoryContext = createContext<CategoryProps>({
  categories: [],
  fechCategories: () => Promise.resolve(),
  isLoading: false
})

const CategoryContextProvider: React.FC<contextCategoryChildren> = ({
  children
}) => {
  const [categories, setCategories] = useState<Catergory[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fechCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Catergory[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
      console.log(categories)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <categoryContext.Provider value={{ categories, fechCategories, isLoading }}>
      {children}
    </categoryContext.Provider>
  )
}

export default CategoryContextProvider
