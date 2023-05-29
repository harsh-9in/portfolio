import './Main.css';
import '../index.css';
import harsh from '../harsh.jpg';


function Main() {
  return (
    <div className="App">
      <div>
        <img src={harsh} alt="Harshit" className='HarshImage' />
      </div>
      <div className="Body-right">
        <div className='Body-right-header'>Hello</div>
          <div className='Body-right-main'>
            A bit more about me
          </div>
          <div className='Body-right-content'>
            I am a web Developer.
          </div>
        
      </div>
      {/* <div>
          <span className='Circle red'>
            Resume
          </span>
          <span className='Circle yellow'>
            Projects
          </span>
          <span className='Circle green'>
            Contact
          </span>
        </div> */}
    </div>
  )
}

export default Main;