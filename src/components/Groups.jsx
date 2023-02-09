import "../styles/MyProfile.css"
import LeftSide from "../LeftSide"
import Navbar from "./Navbar"
import GrupeTable from "../grupeTable";

export default function Groups() {

    var urlGroup = "http://localhost:8080/api/group/svi";

    return (<>
        <div className="glavni">
            <Navbar />
            <div className="container2">
                <LeftSide odakle="group" />
                <div className="main-content2">
                    <GrupeTable url={urlGroup} />
                </div>
                <div className="right-sidebar">
                </div>
            </div>
        </div>
    </>)
}