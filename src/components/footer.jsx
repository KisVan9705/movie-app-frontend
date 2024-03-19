import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

function ImdbFooter() {
  return (
    <footer className='footer bg-dark text-white mt-5'>
      <Container>
        <Row>
          <Col sm={4} className='bg-dark'>
            <h5 className='mb-3'>About IMDb</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Press Room</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Investor Relations</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Jobs</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Conditions of Use</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4} className='bg-dark'>
            <h5 className='mb-3'>Visit IMDbPro</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Sign Up</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Help</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4} className='bg-dark'>
            <h5 className='mb-3'>Follow IMDb</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Facebook</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Twitter</a>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <a href='/'>Instagram</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className='text-center py-3'>
          <Col>&copy; 1990-2024 IMDb.com, Inc.</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ImdbFooter;
