import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (
                    <footer className=' bg-danger text-white text-center'>
                              <Container>
                                        <Row>
                                                  <Col><h5>Copyright &copy; {year} Reserved by Mirza Sabbir</h5></Col>
                                        </Row>
                              </Container>

                    </footer>
          );
};

export default Footer;