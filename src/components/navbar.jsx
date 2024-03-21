import React from "react";
import { useState } from "react";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, isAuthenticated, signOut } from "../utils/authentication";

function MyNavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Get history object

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/?searchText=${searchTerm}`); // Redirect with search term
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../src/assets/imdb_logo.png"
            alt="IMDb Logo"
            width="50px"
            height="auto"
          />
          <span className="navbar-title">IMDb</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Movies & TV</Nav.Link>
            <Nav.Link href="/">Celebs</Nav.Link>
            <Nav.Link href="/">TV Shows</Nav.Link>
            <Nav.Link href="/">News & Awards</Nav.Link>
          </Nav>
          <Form inline className="d-flex">
            <FormControl
              type="search"
              placeholder="Search IMDb"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="outline-light"
              onClick={handleSubmit}
              type="submit"
            >
              Search
            </Button>
          </Form>
          <div className="pr-2">
            {isAdmin() ? (
              <div>
                <Link to="/manageMovies">
                  <Button variant="outline-light" className="btn.sm ms-4">
                    Movies
                  </Button>
                </Link>
                <Link to="/manageUsers">
                  <Button variant="outline-light" className="btn.sm ms-4">
                    Users
                  </Button>
                </Link>
              </div>
            ) : (
              <></>
            )}

            {!isAuthenticated() ? (
              <Link to="/login">
                <Button variant="outline-light" className="btn.sm ms-4">
                  Sign In
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline-light"
                className="btn.sm ms-4"
                onClick={() => {
                  signOut();
                  // After signing out, you can redirect to the login page programmatically
                  navigate("/login");
                }}
              >
                Sign Out
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
