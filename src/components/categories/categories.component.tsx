// styles
import { useContext, useEffect } from 'react'
import axios from 'axios'

//components
import CategoryItem from '../category-item/category-item'

//utilities

import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { categoryContext } from '../../contexts/catergory.context'
import Loading from '../loading/loading.component'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/catergory.action'

const Categories = () => {
  const { categories, isLoading } = useContext(categoryContext)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories() as any)
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
