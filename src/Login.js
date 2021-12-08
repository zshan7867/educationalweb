import React from 'react';
import Container from 'react-bootstrap/Container';
import './login.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginic from './3.png'
import disp from './2.svg'

const Welcome = () => {
   return (<>

  <Container className='mt-5'>
    <Row>
      
    <Col lg={7} md={6} sm={12}> 
      <img className='w-55' src={disp} alt='' /> 
      </Col>
      <Col lg={4} md={6} sm={12} className='text-center mar'>
        <img className='icon-img' src={loginic} alt='icon' /> 
      <Form >
  <Form.Group className='mt-3' controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary btn-block" className='mt-3 btn' href='/home' type="submit">Login</Button>

</Form>
      </Col>

    </Row>
  </Container>
    </>
  );
};

export default Welcome