import './Navbar.css';
import './index.css';

function Navbar(){
    return(
        <nav className="Navbar">
            <div className="Navbar-left">
                <span className='Navbar-left-name'>Harsh Kumar</span>
                {/* <span className='font8'>Developer</span> */}
            </div>

            <div className="Navbar-right">
                <span className='Navbar-right-span'>Resume</span>
                <span className='Navbar-right-span'>Projects</span>
                <span className='Navbar-right-span'>Contact</span>
            </div>
        </nav>
    )
}

export default Navbar;