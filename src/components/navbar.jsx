import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signOut } from "../utils/authentication";

function MyNavbar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='./src/assets/imdb_logo.png'
            alt='IMDb Logo'
            width='50px'
            height='auto'
          />
          <span className='navbar-title'>IMDb</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Movies & TV</Nav.Link>
            <Nav.Link href='/'>Celebs</Nav.Link>
            <Nav.Link href='/'>TV Shows</Nav.Link>
            <Nav.Link href='/'>News & Awards</Nav.Link>
          </Nav>
          <Form inline className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search IMDb'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-light'>Search</Button>
          </Form>
          {!isAuthenticated() ? (
            <Link to='/login'>
              <Button>Sign In</Button>
            </Link>
          ) : (
            <Link to='/login' onClick={signOut}>
              <Button>Sign Out</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
