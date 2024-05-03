import { useLoaderData } from "react-router-dom"
import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductGrid";

function FeaturedProducts() {
const {products} = useLoaderData()
console.log(products);

  return (
    <div className="pt-24">
  <SectionTitle text='featured products'/>
  <ProductGrid/>
    </div>
  )
}

export default FeaturedProducts