 import React from 'react'
 import './home.css'
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import hm from './9.svg'


const Home = () => {
  return ( <> 
  <Container className='mt-5'>
    <Row>
      <Col  lg={6} md={6} sm={12} className='text-center mr'> 
      <h1 className='text-center hea m'>My Chlid Details</h1>
  <p  className='text-center hea'  >
  "The problem that often arises has nothing to do with the timing of the description"" but the amount of description that is needed, which will vary from a simple the bare room to paragraphs of detailed prose.",
  </p>
  <a href='/' className='btn btn-md bt'>My Child Details</a>

      <h1 className='text-center hea '>Payment</h1>
  <p  className='text-center hea'  >
  "The problem that often arises has nothing to do with the timing of the description"" but the amount of description that is needed, which will vary from a simple the bare room to paragraphs of detailed prose.",
  </p>
  <a href='/' className='btn btn-md bt'>Payment</a>
 

      <h1 className='text-center hea'>Tracking</h1>
  <p  className='text-center hea'  >
  "The problem that often arises has nothing to do with the timing of the description"" but the amount of description that is needed, which will vary from a simple the bare room to paragraphs of detailed prose.",
  </p>
  <a href='/' className='btn btn-md bt'>Tracking</a>
      </Col>
    <Col lg={6} md={5} sm={12}> 
      <img className='w-55' src={hm} alt='' />
      </Col>
    </Row>
  </Container>

    </>
  );
};

export default Home