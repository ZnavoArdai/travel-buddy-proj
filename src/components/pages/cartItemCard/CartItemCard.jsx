
import"./CartItemsCard.css"

function CartItemCard({items}) {


  return (
   <div className='CartItemCard d-flex justify-content-evenly text-center container'>
    <img src={items.image} alt="" />
    <p className=''>{items.name}</p>
    <p>{items.price}</p>
    <p>0</p>
    <button>remove item</button>
    <button>+</button>
    <button>-</button>

   </div>
  );
}

export default CartItemCard;