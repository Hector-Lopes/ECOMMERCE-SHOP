import Catergory from '../../types/category.types'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

interface CategoryOverviewProps {
  category?: Catergory
}

const CategoryOverview: React.FC<CategoryOverviewProps> = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category?.displayName} </CategoryTitle>
      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
