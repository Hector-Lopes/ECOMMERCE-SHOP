// styles
import { useEffect } from 'react'
//components
import CategoryItem from '../category-item/category-item'

//utilities

import { CategoriesContainer, CategoriesContent } from './categories.styles'

import Loading from '../loading/loading.component'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/catergory.action'
import { useAppSelector } from '../../hooks/redux.hooks'

const Categories = () => {
  const { categories, isLoading } = useAppSelector(
    (rootReducer) => rootReducer.categoryReducer
  )
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
