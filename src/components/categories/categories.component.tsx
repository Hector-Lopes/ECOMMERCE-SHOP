import { useState, useEffect } from 'react'
import axios from 'axios'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
//components
import CategoryItem from '../category-item/category-item'

//utilities
import Catergory from '../../types/category.types'
// styles

import { CategoriesContainer, CategoriesContent } from './categories.styles'

import env from '../../config/env.config'
import { get } from 'http'

const Categories = () => {
  const [categories, setCategories] = useState<Catergory[]>([])

  const categoriesFromFirestore: Catergory[] = []
  const fechCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'))

      querySnapshot.forEach((doc: any) => {
        const result = doc.data()
        categoriesFromFirestore.push(doc.data())
      })
      console.log(categoriesFromFirestore)
    } catch (e) {
      console.log(e)
    }
  }

  console.log(categories)

  useEffect(() => {
    fechCategories()
  }, [])
  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
