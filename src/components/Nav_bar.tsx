import '../css/Nav_bar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/image sindway/Fichier 9.png'


const Nav_bar = () => {
    return (
        <header>
        <nav className = "navbar">
              <div className='left_element'> 
                <Link to= "/" ><img src={logo} alt="logo" className="logo"/></Link>
              </div>

              <div className='center_element'>
                <Link to= "/">Home</Link>
                <Link to= "/">Service</Link>
                <Link to= "/">Support</Link>
              </div>

              <div className='right_element'>
                <Link to= "/">Try app</Link>
              </div>
        </nav>
        
        </header>
    );
}

export default Nav_bar;
