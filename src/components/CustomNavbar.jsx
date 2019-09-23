import React, { Component } from 'react';
import { Navbar, Nav, Form,  Button, FormControl  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export class CustomNavbar extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">Shopify</Navbar.Brand>
                  
                  <Nav className="mr-auto">
                    <Nav> <Link to="/"> Home </Link> </Nav>
                    <Nav> <Link to={"/about"}> About </Link> </Nav>
                    <Nav> <Link to={"/category"}> Category </Link> </Nav>
                    <Nav> <Link to={"/men"}> Men </Link> </Nav>
                    <Nav> <Link to={"/ladies"}> Ladies </Link></Nav>
                    <Nav> <Link to={"/gadgets"}> Gadgets </Link> </Nav>
                    <Nav> <Link to={"/login"}> Log in </Link> </Nav>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                  </Form>
                </Navbar>
            </div>
        )
    }
}

export default CustomNavbar;

    
    
 