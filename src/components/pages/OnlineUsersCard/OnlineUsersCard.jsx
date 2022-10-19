import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./OnlineUsersCard.css"
import { FaCircle } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import { motion } from "framer-motion";
import SendMessages from '../sendMessages/SendMessages';




function OnlineUsersCard({item,removeItemFromClients}) {


  return (
    <motion.div layout animate={{scale:1,transition:{duration:2}}} initial={{scale:0,transition:{duration:2}}} className='OnlineUsersCard col-sm-4 mt-3 '>

    <Card className='container  '>
      <Card.Img   variant="top"    src={item.image} />
      <Card.Body>
        <Card.Title>{item.name} <FaCircle className='text-success'/></Card.Title>
        <Card.Text>
       {item.age}
        </Card.Text>
        <Card.Text>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <SendMessages item={item}/>
        <Button  onClick={()=>removeItemFromClients(item.id)} style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}><FaRegWindowClose/></Button>

        </div>
   
      </Card.Body>
    </Card>
    </motion.div>
  );
}

export default OnlineUsersCard;
