import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OnlineUsersCard({item}) {

  return (
    <Card className='container '>
      <Card.Img variant="top"  style={{height:"17rem"}} />
      <Card.Body>
        <Card.Title>{item.profile.name}</Card.Title>
        <Card.Text>
       {item.profile.dob}
        </Card.Text>
        <Card.Text>
       {item.about}
        </Card.Text>
        <Button  style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}>Add Item</Button>
      </Card.Body>
    </Card>
  );
}

export default OnlineUsersCard;
