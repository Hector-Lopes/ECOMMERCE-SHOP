import Catergory from '../../types/category.types'

import { CategoryItemContainer, CategoryName } from './category-item.styles'
interface CategoryItemProps {
  category: Catergory
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
