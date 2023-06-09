import './App.css';
import Footer from './Footer/Footer'
import Main  from './Main/Main';
import Contact from './Contact/Contact';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import HarshResume from './HarshResume.pdf';

function App() {
  const currentPage= ()=>{
    switch(window.location.pathname){
      case "/": return <Main/>;
      case "/contact": return <Contact/>;
      case "/resume": return <a href={`./HarshResume.pdf`} rel="noopener noreferrer" target="_blank">
      PDF 
   </a>;
      default: return null;
    }
  }
  

  return (
    <div>
      <header>
        <NavbarHeader/>
      </header>
      {currentPage()}
      <Footer/>
      
    </div>
  );
}

export default App;
