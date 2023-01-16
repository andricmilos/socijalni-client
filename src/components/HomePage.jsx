import "../styles/HomePage.css"
import Image from "../assets/logo.png"
import Image2 from "../assets/notification.png"
import Image3 from "../assets/inbox.png"
import Image4 from "../assets/video.png"
import Image5 from "../assets/search.png"
import Image6 from "../assets/news.png"
import Image7 from "../assets/friends.png"
import Image8 from "../assets/group.png"
import Image9 from "../assets/shortcut-1.png"
import Image10 from "../assets/shortcut-2.png"
import Image11 from "../assets/shortcut-3.png"
import Image12 from "../assets/shortcut-4.png"
import Image13 from "../assets/live-video.png"
import Image14 from "../assets/photo.png"
import Image15 from "../assets/feeling.png"
import Image16 from "../assets/feed-image-1.png"
import Image17 from "../assets/feed-image-2.png"
import Image18 from "../assets/feed-image-3.png"

export default function HomePage(){
    return(<>
    <div className="glavni">
            <nav>
                <div className="nav-left">
                    <img src={Image} className="logo" />
                    <ul>
                        <li><img src={Image2} /></li>
                        <li><img src={Image3} /></li>
                        <li><img src={Image4} /></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div className="search-box">
                        <img src={Image5} />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </nav>

            <div className="container2">
                <div className="left-sidebar">
                    <div className="imp-links">
                        <a href="#"><img src={Image6} />Latest News</a>
                        <a href="#"><img src={Image7} />Friends</a>
                        <a href="#"><img src={Image8} />Group</a>
                        <a href="#">See More</a>
                    </div>
                    <div className="shortcut-links">
                        <p>Your Shortcuts</p>
                        <a href="#"><img src={Image9} />Java Developers</a>
                        <a href="#"><img src={Image10} />C# Developers</a>
                        <a href="#"><img src={Image11} />Frontend Developers</a>
                        <a href="#"><img src={Image12} />Full Stack Developers</a>
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
                            <div className="add-post-links">
                                <a href="#"><img src={Image13} />Live Video</a>
                                <a href="#"><img src={Image14} />Photo/Video</a>
                                <a href="#"><img src={Image15} />Feeling/Activity</a>
                            </div>
                        </div>
                    </div>

                    <div className="post-container">
                        <div className="user-profile">
                            <div>
                                <p>Lazar Lakic</p>
                                <span>Januar 20 2023, 18:45 pm</span>
                            </div>
                        </div>
                        <p className="post-text">Lorem ipsum dolor sit amet, <span> consectetur adipisicing </span> elit. Saepe facere et, hic fuga possimus cumque reiciendis doloribus quasi fugiat, placeat magnam quas vitae laborum praesentium voluptates harum mollitia quidem ullam.
                        Aliquam, porro. Odio voluptate ad harum praesentium eius sint quas velit voluptas expedita suscipit, perferendis vero quod deleniti, nam, animi adipisci. At repellat pariatur mollitia? Laborum asperiores perferendis explicabo dolor.</p>
                        <img src={Image16} className="post-img"/>
                    </div>

                    <div className="post-container">
                        <div className="user-profile">
                            <div>
                                <p>Petar Petrovic</p>
                                <span>Januar 20 2023, 18:45 pm</span>
                            </div>
                        </div>
                        <p className="post-text">Lorem ipsum dolor sit amet, <span> consectetur adipisicing </span> elit. Saepe facere et, hic fuga possimus cumque reiciendis doloribus quasi fugiat, placeat magnam quas vitae laborum praesentium voluptates harum mollitia quidem ullam.
                        Aliquam, porro. Odio voluptate ad harum praesentium eius sint quas velit voluptas expedita suscipit, perferendis vero quod deleniti, nam, animi adipisci. At repellat pariatur mollitia? Laborum asperiores perferendis explicabo dolor.</p>
                        <img src={Image17} className="post-img"/>
                    </div>

                    <div className="post-container">
                        <div className="user-profile">
                            <div>
                                <p>Mikica Mikic</p>
                                <span>Januar 20 2023, 18:45 pm</span>
                            </div>
                        </div>
                        <p className="post-text">Lorem ipsum dolor sit amet, <span> consectetur adipisicing </span> elit. Saepe facere et, hic fuga possimus cumque reiciendis doloribus quasi fugiat, placeat magnam quas vitae laborum praesentium voluptates harum mollitia quidem ullam.
                        Aliquam, porro. Odio voluptate ad harum praesentium eius sint quas velit voluptas expedita suscipit, perferendis vero quod deleniti, nam, animi adipisci. At repellat pariatur mollitia? Laborum asperiores perferendis explicabo dolor.</p>
                        <img src={Image18} className="post-img"/>
                    </div>
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}