import './Main.css';
import '../index.css';
import harsh from '../harsh.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main() {
  return (
    <Container>
      <Row className='Main'>
        <Col>
          <div>
            <img src={harsh} alt="Harshit" className='HarshImage' />
          </div>
        </Col>
        <Col>
          <div className="Body-right">
            <div className='Body-right-header'>Hello</div>
            <div className='Body-right-main'>
              A bit more about me
            </div>
            <div className='Body-right-content'>
              I am Full stack software developer with expertise in JavaScript 
              and agile methodologies, proficient in JavaScript, Python, and Java with expertise in front-end frameworks.
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Main;