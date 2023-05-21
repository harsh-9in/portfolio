import './Main.css';
import harsh from './harsh.jpg'; 
function Main(){
    return(
        <div className="App">
          <div>
           <img src={harsh} alt="Harshit" className='HarshImage' />
          </div>
          <div className="Body-right">
            <div className='hello'>Hello</div>
            <span className=''>
              <div>
                A bit more about me
              </div>
              <span>
                I am a web Developer.
              </span>
            </span>
          </div>
      </div>
    )
}

export default Main;