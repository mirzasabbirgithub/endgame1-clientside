import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

          return (
                    <>
                              <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                                        <Container>
                                                  <Navbar.Brand as={Link} to="home">My Site</Navbar.Brand>
                                                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                  <Navbar.Collapse id="responsive-navbar-nav">
                                                            <Nav className="me-auto">
                                                                      <Nav.Link as={Link} to="home">Home</Nav.Link>
                                                                      <Nav.Link as={Link} to="completedtask">Completed Task</Nav.Link>
                                                                      <Nav.Link as={Link} to="todo">To Do</Nav.Link>
                                                                      <Nav.Link as={Link} to="calendar">Calendar</Nav.Link>
                                                            </Nav>
                                                  </Navbar.Collapse>
                                        </Container>
                              </Navbar>


                    </>
          );
};

export default Header;