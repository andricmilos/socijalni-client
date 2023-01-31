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
                <LeftSide odakle="homepage" />
                <div className="main-content">
                    <div className="write-post-container">
                        <label className="labels">Naslov</label><br />
                        <textarea type="text" name="naslov" className="text-input" onChange={naslovChange} /><br />

                        <label className="labels">Tekst</label><br />
                        <textarea type="text" name="tekst" className="text-input" onChange={tekstChange} /><br />

                        <button type='button' className="button-create" onClick={() => { Klik() }}>Publish it</button>
                    </div>
                    <h1 className="headline">POSTS</h1>
                    <Table url={urlPost} />
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}