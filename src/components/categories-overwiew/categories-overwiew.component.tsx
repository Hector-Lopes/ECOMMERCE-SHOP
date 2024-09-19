import { useContext, useEffect } from 'react'
import { Container } from './categories-overview.styles'
import { categoryContext } from '../../contexts/catergory.context'
import CategoryOverview from '../category-overview/category-overview.component'
import { useAppSelector } from '../../hooks/redux.hooks'
import rootReducer from '../../store/root.reducer'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/catergory.action'

const CategoriesOverview = () => {
  const dispacth = useDispatch()
  const { categories, isLoading } = useAppSelector(
    (rootReducer) => rootReducer.categoryReducer
  )

  useEffect(() => {
    if (categories.length == 0) {
      dispacth(fetchCategories() as any)
    }
  }, [])
  return (
    <Container>
      {categories.map((category) => (
        <>
          <CategoryOverview
            key={category.id}
            category={category}
          ></CategoryOverview>
        </>
      ))}
    </Container>
  )
}

export default CategoriesOverview
