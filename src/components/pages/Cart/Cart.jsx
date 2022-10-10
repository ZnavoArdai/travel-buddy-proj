import"./Cart.css"
import React from 'react'
import { cartContext } from '../../../context/CartContext'
import { useContext } from 'react'
import CartItemCard from '../cartItemCard/CartItemCard'

const Cart = () => {
    


  
    const {cart}=useContext(cartContext)
  return (
    <div className='cartitems showCase justify-content-center d-flex flex-column'>
        {cart.map((items)=>
        <CartItemCard items={items} cart={cart}/>
        )}
    </div>
  )
}

export default Cart