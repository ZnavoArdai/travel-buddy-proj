import "./products.css";
import React, { useContext, useState, useEffect } from "react";
import { Product } from "../../../service/productItems";
import ProductsCard from "../ProductsCard/ProductsCard";
import { cartContext } from "../../../context/CartContext";
const Products = () => {
  const { cart, setCart } = useContext(cartContext);
  const [search, setSearch] = useState("");

  const serchInput = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="showCase">
      <div className="  d-flex justify-content-center mt-5">
        <div className="input-group rounded w-25 ">
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
        <div className="row justify-content-center">
          {Product.items
            .filter((items) =>
              items.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((items) => (
              <ProductsCard items={items} cart={cart} setCart={setCart} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
