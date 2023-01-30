import "../styles/HomePage.css"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    return (<>
        <nav>
            <div className="nav-left">
                <img src="../assets/logo.png" className="logo" />
            </div>
            <button className="logout"><Link className="noUnderline" to='/logout'>Logout</Link></button>
        </nav>
    </>)
}