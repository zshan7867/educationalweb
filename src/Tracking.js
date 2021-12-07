import React from 'react'
import Container from 'react-bootstrap/Container';
import './login.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import igm from './4.svg'
import './track.css'

const Tracking = () => {
  return (
  <>
 <Container className='mt-5'>
    <Row>
    <Col lg={5} md={5} sm={12}> 
      <img className='w-55' src={igm} alt='' />
      </Col>
      <Col lg={5.5} md={6} sm={12} className='text-center ma'>
         <h1 className='hea'> Tracking</h1>
         <p className='hea'>"The problem that often arises has nothing to do with the timing of the description but the amount of description that is needed, which will vary from a simple the bare room to paragraphs of detailed prose.",</p>
      <Form >
  <Form.Group className='mt-3' controlId="formBasicEmail">
    <Form.Control type="childIdCard" placeholder="Child Id Card" />
  </Form.Group>
  
  <Button variant="primary btn-block" className='mt-3 btn' value='/home' type="submit">Find Location</Button>

</Form>
      </Col>
     
    </Row>
  </Container>
 

    </>
  );
};


export default Tracking