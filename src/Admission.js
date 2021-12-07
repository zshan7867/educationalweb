import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import gm from './6.svg'
import mg from './7.svg'
import me from './8.svg'
import './add.css'

const Admission = () => {
  return ( 
  <>
 <Container className='mt-5'>
    <Row className='marg'>
    <Col lg={5} md={5} sm={12} className=' mag' > 
      <img className='w-55 mag' src={gm} alt='' />
      </Col>
    
      <Col lg={6} md={6} sm={12} className='text-center mr'>
        <h1  className='hea'>Payment </h1> 
        <p className='hea'>"The problem that often arises has nothing to do with the timing of the description."</p>     
      <Form className='con'>
  <Form.Group className='mt-3' controlId="formBasicName">
    <Form.Control type="name" placeholder="Student Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Roll No" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Father Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Total Fee" />
  </Form.Group>


  <Button variant="primary btn-block" className='mt-3 btn' value='/home' type="submit">Paid/Check </Button>
</Form>
      </Col>
        </Row>
    <Row className='marg'>
    <Col lg={5} md={5} sm={12} className=' mag'> 
      <img className='w-55 mag' src={me} alt='' />
      </Col>
    <Col lg={6} md={6} sm={12} className='text-center mr'>      
     <h1  className='hea'>Fee Update</h1>
     <p className='hea'>"The problem that often arises has nothing to do with the timing of the description."</p>
      <Form >
  <Form.Group className='mt-3' controlId="formBasicName">
    <Form.Control type="name" placeholder="Student Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Roll Number" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Father Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Fee Paid" />
  </Form.Group>
  <Button variant="primary btn-block" className='mt-3 btn' value='/home' type="submit">Complete</Button>

</Form>
      </Col>
      
    </Row>

    
    <Row className='marg'>
    <Col lg={5} md={5} sm={12} className=' mag'> 
      <img className='w-55 mag' src={mg} alt='' />
      </Col>
    <Col lg={6} md={6} sm={12} className='text-center mr'>      
     <h1  className='hea'>Fee Installments</h1>
     <p className='hea'>"The problem that often arises has nothing to do with the timing of the description."</p>
      <Form >
  <Form.Group className='mt-3' controlId="formBasicName">
    <Form.Control type="name" placeholder="Student Name" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Roll Number" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="No. Of Installments" />
  </Form.Group>

  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Extra Charges" />
  </Form.Group>

  
  <Form.Group  className='mt-3' controlId="formBasicVarchar">
    <Form.Control type="varchar" placeholder="Total Amounts" />
  </Form.Group>
  <Button variant="primary btn-block" className='mt-3 btn' value='/home' type="submit">Apply</Button>

</Form>
      </Col>
      
    </Row>
  </Container>
    </>
  );
};
export default Admission