import { useSelector } from "react-redux";
import SectionTitle from '../components/SectionTitle'
import CartItemsList from "../components/CartItemsList";
import CartTotals from "../components/CartTotals";
import { Link } from "react-router-dom";
function Card() {
  const user = null;
  const numItemsInCart  = useSelector((state)=> state.cartState.numItemsInCart)
  console.log(numItemsInCart);
   if(numItemsInCart === 0){
    return <SectionTitle text="Your cart is empty"/>
   }
  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
     <div className="lg:col-span-8">
      <CartItemsList/>
     </div>
     <div className="lg-col-span-4 lg:pl-4">
   <CartTotals/>
   {user ? (
    <Link className="btn btn-primary btn-block mt-8" to="/checkout">Procced to checkout</Link>
   ):(
    <Link className="btn btn-primary w-80 mt-8" to="/login">Please Login</Link>
   )
  }
     </div>
    </div>
  )
}

export default Card