
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="Navbar">
            <nav className="container-fluid navoverride">
                {/* <h2 className="nomargin" onClick={() => navigate("/")}>Versicherungsrechner</h2> */}
                <h2 className="nomargin"><NavLink to="/">Versicherungsrechner</NavLink></h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/auto">Auto</NavLink></li>
                    <li><NavLink to="/hausrat">Hausrat</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>

                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
