import "../styles/HomePage.css"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    return (<>
        <nav>
            <div className="nav-left">
                <img src="../assets/logo.png" className="logo" />
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src="../assets/search.png" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <button className="logout"><Link className="noUnderline" to='/logout'>Logout</Link></button>
        </nav>
    </>)
}