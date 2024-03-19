import React from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function ImdbFooter() {
  return (
    <footer className='footer bg-dark text-white mt-5'>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className='mb-3'>About IMDb</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Press Room</Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Investor Relations</Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Jobs</Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Conditions of Use</Nav.Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h5 className='mb-3'>Visit IMDbPro</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Sign Up</Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/'>Help</Nav.Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h5 className='mb-3'>Follow IMDb</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark'>
                <Nav.Link href='/' style={{ color: "white" }}>
                  Facebook
                </Nav.Link>
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
