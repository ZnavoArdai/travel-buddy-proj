import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartItemCard({items}) {

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
        <Button variant="primary">Remove item</Button>
      </Card.Body>
    </Card>
  );
}

export default CartItemCard;