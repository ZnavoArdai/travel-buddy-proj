import"./products.css"
import React, { useContext,useState } from 'react'
import { Product } from '../../../service/productItems'
import ProductsCard from '../ProductsCard/ProductsCard'
import { cartContext } from "../../../context/CartContext"
const Products = () => {
  const {cart,setCart}=useContext(cartContext)
const [search,setSearch]=useState()

const serchInput=(e)=>{
setSearch(e.target.value)
}

const searchByName=()=>{

}
  return (
    <div>
      <div>
      <div class="input-group rounded">
  <input type="search" onChange={(e)=>serchInput(e)} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button>serch</button>
</div>
      </div>
    <div className='productsItemCards mt-5 container-fluid d-flex justify-content-center '>
      <div className="row justify-content-center">
      {Product.items.map((items)=>
    
    <ProductsCard items={items} cart={cart} setCart={setCart}/>
       )}

</div>

    
    </div>
    </div>
  )
}

export default Products 