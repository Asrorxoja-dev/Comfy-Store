import {generateAmountOptions} from '../utils/index'
import { useDispatch, useSelector } from 'react-redux'
import { editItem, removeItem } from '../features/cart/cartSlice'
function CartItem({cartItem}) {
const dispatch = useDispatch()
  const {company, color, cartID, title, price, image, amount, productColor} = cartItem
  

  const removeItemTheCart = ()=>{
    dispatch(removeItem({cartID}))
  }

  const handleAmount = (e)=>{
dispatch(editItem({cartID, amount: Number(e.target.value)}))
  }
  return (
    <article key={cartItem.cartID} className="mb-12 flex sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
<img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 lg:w-32 object-cover" />
<div className="sm:ml-16 sm:w-48">
<h3 className="capitalize font-medium">{title}</h3>
<h4 className="mt-2 capitalize text-neutral-content">{company}</h4>
<p className="mt-4 text-sm capitalize flex items-center gap-x-2">
  color: 
  <span style={{backgroundColor: productColor}} className="badge badge-sm">

  </span>
</p>
</div>
<div className="sm:ml-12">
<div className="form-control max-w-xs">
  <label className="label text">Amount</label>
</div>
<select onChange={handleAmount} name="amount" id="amount" value={amount} className='mt-2 select select-base select-bordered select-xs'>
 {generateAmountOptions(amount)}
</select>
</div>
<button className=' link link-primary text-sm' onClick={removeItemTheCart}>remove</button>

    </article>
  )
}

export default CartItem