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
import { categoryConverter } from '../../converters/firestore.converters'

const Categories = () => {
  const [categories, setCategories] = useState<Catergory[]>([])

  const fechCategories = async () => {
    try {
      const categoriesFromFirestore: Catergory[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
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
