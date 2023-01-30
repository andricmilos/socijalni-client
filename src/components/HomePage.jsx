import "../styles/HomePage.css"
import Navbar from "./Navbar";
import Table from "../Table.jsx";
import requestPost from "../RequestPost";
import LeftSide from "../LeftSide";

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
            <LeftSide odakle="homepage"/>
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