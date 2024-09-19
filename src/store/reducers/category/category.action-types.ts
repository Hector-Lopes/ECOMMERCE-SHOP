const CategoryActionType = {
  FETCH_CATEGORIES_START: 'categories/fecthStart' as const,
  CATEGORIES_SUCCESS: 'categories/fetchSuccess' as const,
  CATEGORIES_FAILURE: 'categories/fetchError' as const
}

export default CategoryActionType
