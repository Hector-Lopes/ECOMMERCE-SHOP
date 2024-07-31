import { useState, useEffect } from 'react'
import axios from 'axios'

//components
import CategoryItem from '../category-item/category-item'

//utilities
import Catergory from '../../types/category.types'
// styles

import { CategoriesContainer, CategoriesContent } from './categories.styles'

import env from '../../config/env.config'

const Categories = () => {
  const [categories, setCategories] = useState<Catergory[]>([])

  const fechCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiURL}/categories`)

      setCategories(data)
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
