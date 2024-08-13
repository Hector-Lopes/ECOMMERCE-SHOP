import Product from './products.types'

interface Catergory {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}

export default Catergory
