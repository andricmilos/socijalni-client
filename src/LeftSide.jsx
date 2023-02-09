import GrupeKorisnika from "./GrupeKorisnika";

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
                <GrupeKorisnika />
            </div>
        </div>
    )
}