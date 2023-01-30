import "../styles/MyProfile.css"
import LeftSide from "../LeftSide"
import Navbar from "./Navbar"

export default function Groups() {
    return (<>
        <div className="glavni">
            <Navbar />
            <div className="container2">
                <LeftSide odakle="group" />
                <div className="main-content2">
                </div>
                <div className="right-sidebar">
                </div>
            </div>
        </div>
    </>)
}