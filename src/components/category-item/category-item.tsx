import { useNavigate } from 'react-router-dom'
import Catergory from '../../types/category.types'

import { CategoryItemContainer, CategoryName } from './category-item.styles'
interface CategoryItemProps {
  category: Catergory
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <CategoryItemContainer
      onClick={handleExploreClick}
      backgroundImage={category.imageUrl}
    >
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
