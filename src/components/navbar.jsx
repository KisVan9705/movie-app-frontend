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

  function signOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }

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

            {isAdmin() ? (
              <Nav.Link href="/manageMovies">Manage Movies</Nav.Link>
            ) : (
              <></>
            )}
            {isAdmin() ? (
              <Nav.Link href="/manageUsers">Manage Users</Nav.Link>
            ) : (
              <></>
            )}
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
                // navigate("/login");
              }}
            >
              Sign Out
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
