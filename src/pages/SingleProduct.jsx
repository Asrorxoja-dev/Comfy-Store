import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions} from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";


export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
const [amount, setAmount] = useState(0)
  const { image, price, description, title, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0])
const dispatch = useDispatch()
  
const cartProduct = {
  cardID: product.id + productColor,
  productID: product.id,
  image,
  title,
  price,
  amount: Number(amount),
  productColor,
  company
}

const addToCart = () =>{
  dispatch(addItem({product:cartProduct}))
}

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 mb-10 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="title-xl text-netural-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            {colors.map((color) => {
              return (
                <button
                 key={color}
                  className={`badge w-6 h-6 mr-2 ${color == productColor && "border-2 border-secondary"}`}
                  style={{ background: color }}
                  onClick={()=> setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium">
              amount
              </h4>
            </label>
            <select className="select select-secondary select-bordered select-md"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button onClick={addToCart} className="btn btn-secondary btn-mf">  
       Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
