import Filter from "../components/Filter"
import ProductContainer from "../components/ProductContainer"

import { customFetch } from '../utils'

const url = '/products'

export const loader = async ({request}) =>{
    const response =await customFetch(url)
    const products= response.data.data
    const meta =response.data.meta
console.log(products, meta);
    return {products, meta}
}
function Products() {

  return (
    <div>
      <Filter/>
      <ProductContainer/>
    </div>
  )
}

export default Products