import React from 'react'
import { cartContext } from '../../../context/CartContext'
import { useContext } from 'react'
import CartItemCard from '../cartItemCard/CartItemCard'

const Cart = () => {
    
    const {cart}=useContext(cartContext)
  return (
    <div>
<h1>cart items</h1>
        {cart.map((items)=>
        <CartItemCard items={items}/>
        )}
    </div>
  )
}

export default Cart