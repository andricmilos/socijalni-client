import "../styles/HomePage.css"
import Navbar from "./Navbar";
import { Link, useLocation } from 'react-router-dom';
import Table from "../Table.jsx";

export default function HomePage() {

    var urlPost = "http://localhost:8080/api/post/svi";

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
                        <div className="user-profile">
                            <div>
                                <p>Jhon Nicholson</p>
                                <small>Public</small>
                            </div>
                        </div>
                        <div className="post-input-container">
                            <textarea rows="7" placeholder="What's on your mind, Jhon?"></textarea>
                        </div>
                    </div>

                    <Table url={urlPost} />
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}