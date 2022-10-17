import React, { useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactEror, setContactEror] = useState({});
  const [isSubmitContact,setIsSubmitContact]=useState(false)


  const handelFormChange = (e) => {
    setContactForm({... contactForm, [e.target.name]: e.target.value });
  };

  const onSubmitFormContact=(e)=>{
    e.preventDefault()
    setContactEror(validateConatctForm(contactForm))
    setIsSubmitContact(true)

if(Object.keys(contactEror).length==0&&isSubmitContact){

  alert("you good")
}
    console.log(contactForm);
  }

  const validateConatctForm = (value) => {
    const eror = {};
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!value.name) {
      eror.name = "name required";
    }
    if (!value.message) {
      eror.message = "message required";
    }
    if (!value.email) {
      eror.email = "email required";
    } else if (!regex.test(value.email)) {
      eror.email = "not valid";
    }
 
    return eror;
  };
  useEffect(()=>{
    console.log(contactEror)
if(Object.keys(contactEror).length==0&&isSubmitContact){
}
  },[contactEror])

  return (
    <div className="showCase d-flex justify-content-center">
      <div
        className="mt-5 bg-opacity-50 mb-5 text-light "
        style={{ backgroundColor: "#563D7C" }}
      >
        <Form>
          <h3>Contact us</h3>
          <Form.Group className="mb-3" controlId="namee">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={(e)=>handelFormChange(e)} />
          </Form.Group>
          <p style={{color:"red"}}>{contactEror.name}</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>handelFormChange(e)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <p style={{color:"red"}}>{contactEror.email}</p>


          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control type="text" rows={3} name="message" onChange={(e)=>handelFormChange(e)}/>
          </Form.Group>
          <p style={{color:"red"}}>{contactEror.message}</p>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>onSubmitFormContact(e)}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
