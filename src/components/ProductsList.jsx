import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils";

function ProductsList() {
    const {products} = useLoaderData()
   
  return (
    <div>
{products.map((product)=>{
    const {image, company, price, title} = product.attributes
  const dollarAmount = formatPrice(price);

return <Link to={`/product/${product.id}`} key={product.id}>
<div className="card  lg:card-side bg-base-100 mb-3 p-5 shadow-xl">
<figure><img className="w-36 h-36 rounded-md object-cover  group-hover:scale-105 transition duration-300" src={image} alt={title}/></figure>
<div className="card-body ">
  <h2 className="card-title capitalize font-medium md:text-center text-lg">{title}</h2>
  <p className="text-neutral-content capitalize text-md">{company}</p>
  
  <div className="card-actions  justify-end font-medium sm:ml-auto text-lg m-0">
  {dollarAmount}
   
  </div>
</div>
</div>
</Link>
})}
    </div>
  )
}

export default ProductsList