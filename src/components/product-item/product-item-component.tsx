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

interface ProductItemProps {
  product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const HandleAddToCart = () => {
    addProductToCart(product)
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
