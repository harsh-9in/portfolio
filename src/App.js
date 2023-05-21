import './App.css';
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div className="App">
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
    </>
  );
}

export default App;
