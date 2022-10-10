import"./Community.css"
import React, { useContext } from 'react'
import { Product } from '../../../service/productItems'
import ProductsCard from '../Products/ProductsCard'
import { cartContext } from "../../../context/CartContext"
const Products = () => {
  const {cart,setCart}=useContext(cartContext)
  return (
    <div className='productsItemCards'>
      {Product.items.map((items)=>
    
    <ProductsCard items={items} cart={cart} setCart={setCart}/>
       )}

    

    
    </div>
  )
}

export default Products 