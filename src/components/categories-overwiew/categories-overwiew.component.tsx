import { useContext, useEffect } from 'react'
import { Container } from './categories-overview.styles'
import { categoryContext } from '../../contexts/catergory.context'

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
          <p key={category.id}>{category.displayName}</p>
        </>
      ))}
    </Container>
  )
}

export default CategoriesOverview
