import './App.css';

import Footer from './Footer/Footer'
import Main  from './Main/Main';
import Contact from './Contact/Contact';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarHeader from './NavbarHeader/NavbarHeader';

function App() {
  return (
    <div>
      <header>
        <NavbarHeader/>
      </header>
      <Main/>
      {/* <Contact/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
