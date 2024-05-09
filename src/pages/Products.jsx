import Filter from "../components/Filter"
import PaginationContainer from "../components/PaginationContainer"
import ProductContainer from "../components/ProductContainer"

import { customFetch } from '../utils'

const url = '/products'

export const loader = async ({request}) =>{
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
    const response =await customFetch(url,{params})
    const products= response.data.data
    const meta =response.data.meta

    return {products, meta}
}
function Products() {

  return (
    <div>
      <Filter/>
      <ProductContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default Products