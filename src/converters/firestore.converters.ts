import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import Catergory from '../types/category.types'
import User from '../types/user'

export const categoryConverter = {
  toFirestore(category: Catergory): DocumentData {
    return { ...category }
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Catergory {
    const data = snapshot.data(options)
    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}
export const userConverter = {
  toFirestore(user: User): DocumentData {
    return { ...user }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options)

    return {
      id: data.id,
      Email: data.email,
      FisrtName: data.firstName,
      LastName: data.lastName,
      Provider: data.provider
    }
  }
}
