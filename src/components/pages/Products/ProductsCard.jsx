import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from '../Cart/Cart';

function ProductsCard({items,cart,setCart}) {

  const addToCart=(item)=>{
setCart([...cart,{...item}])

  }
  return (
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
        <Button variant="primary" onClick={()=>addToCart(items)}>Add Item</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;