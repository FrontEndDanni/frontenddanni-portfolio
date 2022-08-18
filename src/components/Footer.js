import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col size = {12} sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className='social-icon-2'>
                            <a href='https://www.linkedin.com/in/frontenddanni'><img src={navIcon1}/></a>
                            <a href='https://www.github.com/FrontEndDanni'><img src={navIcon2}/></a>
                            <a href='https://www.instagram.com/frontenddanni/'><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved by FrontEndDanni</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}