import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./OnlineUsersCard.css"
import { FaCircle } from 'react-icons/fa';

function OnlineUsersCard({item,index}) {

  return (
    <div className='OnlineUsersCard col-md-4 mt-3 '>

    <Card className='container  '>
      <Card.Img  variant="top"   style={{height:"17rem"}} src={`images/usersimg/user${index}.jpg`} />
      <Card.Body>
        <Card.Title>{item.profile.name} <FaCircle className='text-success'/></Card.Title>
        <Card.Text>
       {item.profile.dob}
        </Card.Text>
        <Card.Text>
       {item.about}
        </Card.Text>
        <Button  style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}>send massage</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default OnlineUsersCard;
