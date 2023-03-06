import "../styles/HomePage.css"
import Navbar from "./Navbar";
import Table from "../Table.jsx";
import requestPost from "../RequestPost";
import LeftSide from "../LeftSide";
import Options from "../Options";
import { useParams } from 'react-router-dom';

export default function HomePage() {

    const { id } = useParams()
    var urlPost = "http://localhost:8080/api/post/svi/";
    if (id != null) {
        urlPost = "http://localhost:8080/api/post/from/group/" + id;
    }
    var urlGroup = "http://localhost:8080/api/group/svi";


    var post = { "naslov": "", "tekst": "", "grupe": "", "datum_postavljanja": "", "user": "" }

    const naslovChange = (event) => {
        post["naslov"] = event.target.value
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
    }

    const grupeChange = (event) => {
        post["grupe"] = event.target.value
    }

    function Klik() {
        fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
            .then(response => response.json())
            .then((jsonData) => {
                post["datum_postavljanja"] = new Date().toLocaleString()
                post["tekst"] = post["tekst"].replaceAll("\n", "%0A")
                post["user"] = jsonData.ID;
                var vrednost = "?naslov=" + post['naslov'] + "&tekst=" + post['tekst'] + "&grupe=" + post['grupe'] + "&datum_postavljanja=" + post['datum_postavljanja'] + "&user=" + post['user'];
                requestPost('http://localhost:8080/api/post/add', vrednost)
            })
            .catch((error) => {
                setPodaci(myError);
                console.error(error)
            })
    }

    return (<>
        <div className="glavni">
            <Navbar />
            <div className="container2">
                <LeftSide odakle="homepage" />
                <div className="main-content">
                    <div className="write-post-container">
                        <label className="labels">Title</label><br />
                        <textarea type="text" name="naslov" className="text-input" onChange={naslovChange} /><br />

                        <label className="labels">Text</label><br />
                        <textarea type="text" name="tekst" className="text-input" onChange={tekstChange} /><br />

                        <label className="labels">Chose your group:</label><br /><br />
                        <select name="grupe" className="title" onChange={grupeChange}>
                            <Options url={urlGroup} />
                        </select>

                        <button type='button' className="button-create" onClick={() => { Klik() }}>Publish</button>
                    </div>
                    <h1 className="headline">POSTS</h1>
                    <Table url={urlPost} />
                </div>
                <div className="right-sidebar"></div>
            </div>
        </div>
    </>)
}