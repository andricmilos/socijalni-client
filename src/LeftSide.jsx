export default function LeftSide({ odakle }) {
    var profile = false
    var posts = false
    var groups = false
    switch (odakle) {
        case "myprofile":
            profile = true
            break;
        case "homepage":
            posts = true
            break;
        case "group":
            groups = true
            break;
    }
    return (
        <div className="left-sidebar">
            <div className="imp-links">
                <a href="/log" className={posts ? "chosen" : ""}><img src="../assets/news.png" />Posts</a>
                <a href="/myprofile" className={profile ? "chosen" : ""}><img src="../assets/friends.png" />My profile</a>
                <a href="/groups" className={groups ? "chosen" : ""}><img src="../assets/group.png" />Group</a>
            </div>
            <div className="shortcut-links">
                <p>Your Groups</p>
                <a href="#"><img src="../assets/shortcut-1.png" />Java Developers</a>
                <a href="#"><img src="../assets/shortcut-2.png" />C# Developers</a>
                <a href="#"><img src="../assets/shortcut-3.png" />Frontend Developers</a>
                <a href="#"><img src="../assets/shortcut-4.png" />Full Stack Developers</a>
            </div>
        </div>
    )
}