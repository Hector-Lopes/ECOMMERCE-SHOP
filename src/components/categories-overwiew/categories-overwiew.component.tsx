import { useContext, useEffect } from 'react'
import { Container } from './categories-overview.styles'
import { categoryContext } from '../../contexts/catergory.context'
import CategoryOverview from '../category-overview/category-overview.component'

const CategoriesOverview = () => {
  const { categories, fechCategories } = useContext(categoryContext)

  useEffect(() => {
    if (categories.length == 0) {
      fechCategories()
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
