import"./products.css"
import React, { useContext } from 'react'
import { Product } from '../../../service/productItems'
import ProductsCard from '../ProductsCard/ProductsCard'
import { cartContext } from "../../../context/CartContext"
const Products = () => {
  const {cart,setCart}=useContext(cartContext)
  return (
    <div className='productsItemCards mt-5 container-fluid d-flex justify-content-center '>
      <div className="row justify-content-center">
      {Product.items.map((items)=>
    
    <ProductsCard items={items} cart={cart} setCart={setCart}/>
       )}

</div>

    
    </div>
  )
}

export default Products 