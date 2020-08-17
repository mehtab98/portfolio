import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {DiGithub} from 'react-icons/di';
import {FaLinkedinIn} from "react-icons/fa";
import './contact.css';

const Contact = () => {
    return(  
        <>
         <header className="header1">     
            <img className="background_pic" src={require("../../images/another_flock.jpeg")}  alt="fog over the bay"/>
            <div class="hero_text_net_t">
            </div>
        </header> 
        <h1 style={{marginLeft: "-800px", marginBottom:"0px"}}>Contact </h1>
        <h1 style={{marginLeft: "-850px", marginBottom:"0px"}}><a className="iconlink" href="https://github.com/mehtab98">< DiGithub/></a>  <a className="iconlink"href="https://www.linkedin.com/in/mehtab-randhawa-a83786177/"><FaLinkedinIn/></a> </h1>
        <body className="form_body"> 
          <Form className="form_style">
          <Form.Group className="form_input" controlId="exampleForm.ControlInput1">
            <Form.Label  className="labels">Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="form_input"  controlId="exampleForm.ControlSelect1">
            <Form.Label className="labels">Example select:</Form.Label>
            <Form.Control as="select">
              <option>Frontend Job</option>
              <option>Backend Job</option>
              <option>Password</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group className="form_input"  controlId="exampleForm.ControlTextarea1">
            <Form.Label className="labels">More Information:</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button className="form_submit" variant="secondary" size="lg" active>
            Submit
          </Button>


        </Form>
  
      </body> 
      </>
    )
}

export default Contact; 