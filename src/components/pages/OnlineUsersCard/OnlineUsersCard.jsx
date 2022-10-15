import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./OnlineUsersCard.css"
import { FaCircle } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';



function OnlineUsersCard({item,removeItemFromClients}) {


  return (
    <div className='OnlineUsersCard col-sm-4 mt-3 '>

    <Card className='container  '>
      <Card.Img  variant="top"   style={{height:"17rem"}} src={item.image} />
      <Card.Body>
        <Card.Title>{item.name} <FaCircle className='text-success'/></Card.Title>
        <Card.Text>
       {item.age}
        </Card.Text>
        <Card.Text>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button  style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}>send massage</Button>
        <Button  onClick={()=>removeItemFromClients(item.id)} style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}><FaRegWindowClose/></Button>

        </div>
   
      </Card.Body>
    </Card>
    </div>
  );
}

export default OnlineUsersCard;
