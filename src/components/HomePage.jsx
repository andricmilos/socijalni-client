import "../styles/HomePage.css"
import Navbar from "./Navbar";
import { Link, useLocation } from 'react-router-dom';
import Table from "../Table.jsx";
import requestPost from "../RequestPost";

export default function HomePage() {

    var urlPost = "http://localhost:8080/api/post/svi";


    var post = { "naslov": "", "tekst": "", "lajkovi": 0, "datum_postavljanja": "" }

    const naslovChange = (event) => {
        post["naslov"] = event.target.value
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
    }

    function Klik() {
        post["datum_postavljanja"] = new Date().toLocaleString()
        var vrednost = "?naslov=" + post['naslov'] + "&tekst=" + post['tekst'] + "&lajkovi=" + post['lajkovi'] + "&datum_postavljanja=" + post['datum_postavljanja'];
        requestPost('http://localhost:8080/api/post/add', vrednost)
    }

    return (<>
        <div className="glavni">
            <Navbar />
            <div className="container2">
                <div className="left-sidebar">
                    <div className="imp-links">
                        <a href="/log" className="chosen"><img src="../assets/news.png" />Posts</a>
                        <a href="/myprofile"><img src="../assets/friends.png" />My profile</a>
                        <a href="#"><img src="../assets/group.png" />Group</a>
                    </div>
                    <div className="shortcut-links">
                        <p>Your Shortcuts</p>
                        <a href="#"><img src="../assets/shortcut-1.png" />Java Developers</a>
                        <a href="#"><img src="../assets/shortcut-2.png" />C# Developers</a>
                        <a href="#"><img src="../assets/shortcut-3.png" />Frontend Developers</a>
                        <a href="#"><img src="../assets/shortcut-4.png" />Full Stack Developers</a>
                    </div>
                </div>
                <div className="main-content">
                    <div className="write-post-container">
                        <label>Naslov</label>
                        <input type="text" name="naslov" onChange={naslovChange} />

                        <label>Tekst</label>
                        <input type="text" name="tekst" onChange={tekstChange} />

                        <button type='button' onClick={() => { Klik() }}>Create</button>
                    </div>
                    <h1 className="headline">Post</h1>
                    <Table url={urlPost} />
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}