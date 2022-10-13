import Button from 'react-bootstrap/Button';
import "./ProductsCard.css"
import Card from 'react-bootstrap/Card';
import Cart from '../Cart/Cart';

function ProductsCard({items,cart,setCart}) {

  const addToCart=(item)=>{
    // if exist in the cart return only the item//
    if(cart.indexOf(item)!== -1)return;
setCart([...cart,item])
  }
  return (
    <div className='ProductCARD col-md-4 mt-2'>
    <Card className='container '>
      <Card.Img variant="top" src={items.image} style={{height:"17rem"}} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
       {items.describe}
        </Card.Text>
        <Card.Text>
       {items.price}$
        </Card.Text>
        <Button  style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}} onClick={()=>addToCart(items)}>Add Item</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductsCard;