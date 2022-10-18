import "./products.css";
import React, { useContext, useState, useEffect } from "react";
import { Product } from "../../../service/productItems";
import ProductsCard from "../ProductsCard/ProductsCard";
import { cartContext } from "../../../context/CartContext";
import AddItem from "../addItem/AddItem";
import { motion } from "framer-motion";

const Products = () => {
  const { cart, setCart } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const [productS,setProductS]=useState(Product)

  const serchInput = (e) => {
    setSearch(e.target.value);
  };


  const category=(value)=>{
const items=productS.items.filter((item)=>item.category===value);
setProductS({...productS,items})
  }

  const allproducts=()=>{
    setProductS(Product)
      }
 

  


  return (
    <div className="showCase mt-5">
<div className="d-flex justify-content-center container ">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>category("Travel")}/>
  <label class="form-check-label" for="flexRadioDefault1">
  Travel products
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>category("Airplane")}/>
  <label class="form-check-label" for="flexRadioDefault2">
  AirPlan products   </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={allproducts}/>
  <label class="form-check-label" for="flexRadioDefault2">
  All products   </label>
</div>
</div>


     <motion.div animate={{y:150 ,transition:{duration:3 }}} className="float-end sticky-top">
     <AddItem productS={productS}  setProductS={setProductS}/>

     </motion.div>
      <div className="  d-flex justify-content-center mt-5">
        <div className="input-group rounded w-50 ">
          <input
            type="search"
            onChange={(e) => serchInput(e)}
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            style={{
              background: "#FFE484",
              borderBlockColor: "#563D7C",
              color: "black",
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="productsItemCards mt-5 container-fluid d-flex justify-content-center ">
        <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className="row justify-content-center">
          {productS.items
            .filter((items) =>
              items.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((items) => (
              <ProductsCard items={items} cart={cart} setCart={setCart} />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
