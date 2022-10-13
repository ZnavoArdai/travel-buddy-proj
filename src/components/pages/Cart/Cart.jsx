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
    <div className="justify-content-center ">

    
    <div className='cartitems showCase d-flex flex-column mt-5 '>
    {!price?(<h1 className="text-center">cart is empty</h1>):(cart.map((items)=>
        <CartItemCard items={items} cart={cart} setCart={setCart} changePrice={changePrice} setPrice={setPrice}/>
        
        ))}
               <div className=" totalprice text-center"><h3>Totale:</h3><span>{price}$</span></div>

    </div>
    </div>
  )
}

export default Cart