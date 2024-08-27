import Catergory from '../../types/category.types'
import ProductItem from '../product-item/product-item-component'
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
      <ProductsContainer>
        {category?.products.slice(0, 4).map((product) => (
          <>
            <ProductItem product={product} key={product.id}></ProductItem>
          </>
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
