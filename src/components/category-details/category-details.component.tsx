import { useEffect, useState } from 'react'
import Catergory from '../../types/category.types'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

import Loading from '../loading/loading.component'
import ProductItem from '../product-item/product-item-component'

import { BiChevronLeft } from 'react-icons/bi'

import {
  Container,
  CategoryTitle,
  IconContainer,
  ProductsContainer
} from './category-details.styles'
import { useNavigate } from 'react-router-dom'
interface CategoryDetailsProps {
  categoryId?: string
  children?: React.ReactNode
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({
  children,
  categoryId
}) => {
  const [category, SetCategory] = useState<Catergory | null>(null)
  const [isLoading, setIsloading] = useState(false)

  const navigate = useNavigate()

  const handleBackMenu = () => {
    navigate('/')
  }

  useEffect(() => {
    const fecthCategory = async () => {
      setIsloading(true)
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        SetCategory(category)
      } catch {
      } finally {
        setIsloading(false)
      }

      console.log()
    }
    fecthCategory()
  }, [])
  if (isLoading) return <Loading></Loading>
  return (
    <>
      <Container>
        <CategoryTitle>
          <p>Explorar-{category?.displayName}</p>
        </CategoryTitle>
        <IconContainer>
          <BiChevronLeft onClick={handleBackMenu} size={36}></BiChevronLeft>
        </IconContainer>
        <ProductsContainer>
          {category?.products.map((product) => {
            return (
              <ProductItem key={product.id} product={product}></ProductItem>
            )
          })}
        </ProductsContainer>
      </Container>
    </>
  )
}

export default CategoryDetails
