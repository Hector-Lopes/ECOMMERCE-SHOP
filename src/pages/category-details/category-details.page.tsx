import { useParams } from 'react-router-dom'
import CategoryDetails from '../../components/category-details/category-details.component'
import Header from '../../components/header/header.component'

const CategoryDetailsPage = () => {
  const { id } = useParams()
  return (
    <>
      <Header></Header>
      <CategoryDetails categoryId={id}></CategoryDetails>
    </>
  )
}

export default CategoryDetailsPage
