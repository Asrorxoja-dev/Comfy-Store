import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

function CartTotals() {
    const {cartTotal, shipping, tax, orderTotal} = useSelector((state)=>state.cartState)
  return (
    <div className='card w-80 p-3 bg-base-200'>
<div className="card body">
    <p className='flex justify-between text-xl border-b border-base-300 pb-3'>
        <span>Subtotal</span>
        <span className='font-medium'>{formatPrice(cartTotal)}</span>
    </p>

    <p className='flex justify-between text-xl border-b border-base-300 pb-3'>
        <span>Shipping</span>
        <span className='font-medium'>{formatPrice(shipping)}</span>
    </p>

    <p className='flex justify-between text-xl border-b border-base-300 pb-3'>
        <span>Tax</span>
        <span className='font-medium'>{formatPrice(tax)}</span>
    </p>

    <p className='flex justify-between text-xl border-b border-base-300 '>
        <span className='font-bold'>Order Total</span>
        <span className='font-bold'>{formatPrice(orderTotal)}</span>
    </p>
</div>
    </div>
  )
}

export default CartTotals