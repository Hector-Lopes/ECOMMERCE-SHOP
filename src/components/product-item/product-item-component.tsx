import Product from '../../types/products.types'
import CustomButton from '../custom-button/custom-button'
import { BsCartPlus } from 'react-icons/bs'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useAppSelector } from '../../hooks/redux.hooks'
import cartReducer from '../../store/reducers/cart/cart.reducer'
import { useDispatch } from 'react-redux'
import { AddProducToCart } from '../../store/toolkit/cart/cart.slice'
import CartProduct from '../../types/cart.types'

interface ProductItemProps {
  product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispacth = useDispatch()
  const HandleAddToCart = () => {
    dispacth(AddProducToCart(product as CartProduct))
  }
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          onClick={HandleAddToCart}
          startIcon={<BsCartPlus></BsCartPlus>}
        >
          Adicionar o carrinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
