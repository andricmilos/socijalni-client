import "../styles/HomePage.css"

export default function HomePage(){
    return(<>
    <div className="glavni">
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
            </nav>

            <div className="container2">
                <div className="left-sidebar">
                    <div className="imp-links">
                        <a href="#"><img src="../assets/news.png" />Posts</a>
                        <a href="#"><img src="../assets/friends.png" />My profile</a>
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

                    <div className="post-container">
                        <div className="user-profile">
                            <div>
                                <p>Lazar Lakic</p>
                                <span>Januar 20 2023, 18:45 pm</span>
                            </div>
                        </div>
                        <p className="post-text">Lorem ipsum dolor sit amet, <span> consectetur adipisicing </span> elit. Saepe facere et, hic fuga possimus cumque reiciendis doloribus quasi fugiat, placeat magnam quas vitae laborum praesentium voluptates harum mollitia quidem ullam.
                        Aliquam, porro. Odio voluptate ad harum praesentium eius sint quas velit voluptas expedita suscipit, perferendis vero quod deleniti, nam, animi adipisci. At repellat pariatur mollitia? Laborum asperiores perferendis explicabo dolor.</p>
                        <img src="../assets/feed-image-1.png" className="post-img"/>
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
                        <img src="../assets/feed-image-2.png" className="post-img"/>
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
                        <img src="../assets/feed-image-3.png" className="post-img"/>
                    </div>
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}