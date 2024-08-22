// styles
import { useContext, useEffect } from 'react'
import axios from 'axios'

//components
import CategoryItem from '../category-item/category-item'

//utilities

import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { categoryContext } from '../../contexts/catergory.context'
import Loading from '../loading/loading.component'

const Categories = () => {
  const { categories, isLoading, fechCategories } = useContext(categoryContext)
  useEffect(() => {
    fechCategories()
  }, [])
  return (
    <CategoriesContainer>
      {isLoading && <Loading></Loading>}
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
