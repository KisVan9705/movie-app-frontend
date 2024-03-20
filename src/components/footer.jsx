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
    <footer className='footer bg-dark text-white mt-5 p-5'>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className='mb-3'>About IMDb</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark ' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Press Room
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem
                className='bg-dark text-white hover'
                style={{ border: "none" }}
              >
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Investor Relations
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Jobs
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark ' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Conditions of Use
                </Nav.Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h5 className='mb-3'>Visit IMDbPro</h5>
            <ListGroup variant='flush'>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Sign Up
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Help
                </Nav.Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h5 className='mb-3'>Follow IMDb</h5>
            <ListGroup variant='borderless-list'>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Facebook
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Twitter
                </Nav.Link>
              </ListGroupItem>
              <ListGroupItem className='bg-dark' style={{ border: "none" }}>
                <Nav.Link href='/' style={{ color: "gray" }}>
                  Instagram
                </Nav.Link>
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
