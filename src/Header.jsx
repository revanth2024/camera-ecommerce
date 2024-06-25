import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({ cart }) => {
  const [opendropdown, setOpendropdown] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="navbar" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={require("./images/logo.png")}
              className="logo"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <Nav.Item>
                <Link to="/" className="navlink">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className="navlink">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/products" className="navlink">
                  Products
                </Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex align-items-center justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                id="searchbox"
                className="me-2"
                aria-label="Search"
              />
              <Nav.Link href="#action4">
                <Link to="/cart" className="navlink navlink-icon">
                  <i class="fa-solid fa-cart-shopping fa-xl"></i> ({" "}
                  {cart.length} ){" "}
                </Link>
              </Nav.Link>
              <span
                className="text-white"
                onClick={() => setOpendropdown((open) => !open)}
              >
                <i className="fa-solid fa-user fa-xl" id="usericon"></i>
              </span>
              {opendropdown && (
                <div className="dropdownfile">
                  <ul>
                    <li>Profile</li>
                    <li>Add Account</li>
                    <hr className="mt-3 mb-0" />
                    <li>Settings</li>
                  </ul>
                </div>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet></Outlet>
    </>
  );
};
