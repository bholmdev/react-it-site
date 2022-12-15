import {Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
        <Container>
            <Row className="align-items-center">
                <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="footer-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="footer-link" to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className="footer-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="footer-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs='6' sm='3' className='text-center'>
                    <h5>Social</h5>
                    <a
                        className='btn btn-social-icon btn-instagram'
                        href='http://instagram.com/'
                    >
                        <i className='fa fa-instagram' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-facebook'
                        href='http://www.facebook.com/'
                    >
                        <i className='fa fa-facebook' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-twitter'
                        href='http://twitter.com/'
                    >
                        <i className='fa fa-twitter' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-google'
                        href='http://youtube.com/'
                    >
                        <i className='fa fa-youtube' />
                    </a>
                </Col>
                <Col sm='4' className='text-center'>
                    <h5>Contact</h5>
                    <a
                        role='button'
                        className='footer-button'
                        href='tel:+15555555555'
                    >
                        <i className='fa fa-phone' /> 1-555-555-5555
                    </a>
                    <br />
                    <a
                        role='button'
                        className='footer-button'
                        href='mailto:exampleemail@email.com'
                    >
                        <i className='fa fa-envelope-o' /> exampleemail@email.com
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;