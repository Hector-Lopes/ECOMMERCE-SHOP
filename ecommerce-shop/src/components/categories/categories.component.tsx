import { useState, useEffect } from 'react'
import axios from 'axios'
//utilities
import Catergory from '../../types/category.types'
// styles
import './categories.styles.css'
import env from '../../config/env.config'

const Categories = () => {
  const [categories, setCategories] = useState<Catergory[]>([])

  const fechCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiURL}/categories`)

      setCategories(data)
    } catch (e) {
      console.log(e)
    }
  }

  console.log(categories)

  useEffect(() => {
    fechCategories()
  }, [])
  return (
    <div className='catergories-container'>
      <div className='categories-content'></div>
    </div>
  )
}

export default Categories
