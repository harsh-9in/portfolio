import './Footer.css';
import '../index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='Footer-up'>Phone</div>
                    <span>8077184281</span>
                </Col>
                <Col>
                    <div className='Footer-up'>Email</div>
                    <span>harshkumar9.in@gmail.com</span>
                </Col>
                <Col>
                    <div className='Footer-up'>Follow Me</div>
                    <span>Linkedin, Twitter</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;