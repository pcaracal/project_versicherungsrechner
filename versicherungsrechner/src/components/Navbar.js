
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="container-fluid navoverride">
                <h1 className="nomargin">Versicherungsrechner</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
