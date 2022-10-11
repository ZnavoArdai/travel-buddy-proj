import"./Cart.css"
import React from 'react'
import { cartContext } from '../../../context/CartContext'
import { useContext ,useState,useEffect} from 'react'
import CartItemCard from '../cartItemCard/CartItemCard'

const Cart = () => {
    
  const [price,setPrice]=useState(
    ()=>{return 0}
  )

  const changePrice=()=>{
    let sum =0;
    cart.map((item)=>sum+=parseInt(item.price*item.amount))
    setPrice(sum)
  }

  useEffect(()=>{
    changePrice()
  })
  
    const {cart,setCart}=useContext(cartContext)
  return (
    <div className='cartitems showCase justify-content-center d-flex flex-column'>
        {cart.map((items)=>
        <CartItemCard items={items} cart={cart} setCart={setCart} changePrice={changePrice} setPrice={setPrice}/>
        )}

        <div>{price}</div>
    </div>
  )
}

export default Cart