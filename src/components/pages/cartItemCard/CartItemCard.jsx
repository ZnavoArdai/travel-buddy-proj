import "./CartItemsCard.css";

function CartItemCard({ items, cart, setCart, changePrice }) {
  const removeItem = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    changePrice();
  };

  
  const changeAmount=(item,number)=>{
    const itemIndex=cart.indexOf(item);
    const tempCart=cart;

    parseInt(tempCart[itemIndex].amount+=number);
    setCart([...tempCart])
    
      }

  return (
    <div>
      <div className="CartItemCard d-flex justify-content-evenly text-center container">
        <img src={items.image} alt="" />
        <p className="">{items.name}</p>
        <p>{items.price}</p>
        <p>{items.amount}</p>
        <button onClick={() => removeItem(items.id)}>remove item</button>
        <button onClick={()=>changeAmount(items,1)}>+</button>
        <button onClick={()=>changeAmount(items,-1)}>-</button>
      </div>
    </div>
  );
}

export default CartItemCard;
