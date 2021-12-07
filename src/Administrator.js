import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import pic from './5.svg'

const Administrator = () => {
  return (
  <>
  <Container className='mt-5'>
    <Row>
      
    <Col lg={6} md={6} sm={12}> 
      <img className='w-53' src={pic} alt='' />
      </Col>
      <Col lg={4} md={6} sm={12} className='text-center mr'>      
      <Form >
  <Form.Group className='mt-3' controlId="formBasicName">
    <Form.Control type="name" placeholder="Student Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Date Of Brith" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Gender" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Religious" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Father Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Father Number" />
  </Form.Group>


  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Address" />
  </Form.Group>


  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Pervious Academic" />
  </Form.Group>
  <Button variant="primary btn-block" className='mt-3 btn' value='/home' type="submit">Submit</Button>

</Form>
      </Col>

    </Row>
  </Container>
 

    </>
  );
};

export default Administrator

