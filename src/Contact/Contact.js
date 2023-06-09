import './Contact.css';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="Contact">
                        <div className="Contact-Left">
                            <span className='Contact-Left-element'>
                                <span>Contact</span>
                                <span>Looking forward to hearing form you</span>
                            </span>
                            <span className='Contact-Left-element'>
                                <span>Phone</span>
                                <span>8077184181</span>
                            </span>
                            <span className='Contact-Left-element'>
                                <span>Email</span>
                                <span>harshkumar9.in@gmail.com</span>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;