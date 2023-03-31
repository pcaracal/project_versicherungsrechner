
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="Navbar">
            <nav className="container-fluid navoverride">
                <h1 className="nomargin" onClick={() => navigate("/")}>Versicherungsrechner</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
