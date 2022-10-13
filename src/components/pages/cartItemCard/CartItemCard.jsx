import "./CartItemsCard.css";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';


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
    
    if(tempCart[itemIndex].amount==0)tempCart[itemIndex].amount=1
    setCart([...tempCart])
    
      }

  return (
    <div className="cartCardContainer  container">
      <div className="CartItemCard d-flex justify-content-evenly text-center  ">
        <img src={items.image} alt="" />
        <p className="">{items.name}</p>
        <p>{items.price}</p>
        <p>{items.amount}</p>
        <div>
        <Button style={{background:"#FFE484",borderBlockColor:"#563D7C" ,color:"black"}} onClick={()=>changeAmount(items,1)}>+</Button>
        <Button style={{background:"#FFE484",borderBlockColor:"#563D7C" ,color:"black"}} onClick={()=>changeAmount(items,-1)}>-</Button>
        </div>
        <Button style={{background:"#FFE484",borderBlockColor:"#563D7C"}}  onClick={() => removeItem(items.id)}><FaTrashAlt color="red"/></Button>
      </div>
    </div>
  );
}

export default CartItemCard;



