import "../styles/MyProfile.css"
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar"
import requestPost from '../RequestPost';

export default function EditPassword() {
    const location = useLocation();
    var user = { "kogaid": "", "email": "", "ime": "", "prezime": "", "username": "", "datum_rodjenja": "", "datum_pravljenja_naloga": "", "password": "", "confirmPassword": "" }

    const passwordChange = (event) => {
        user["password"] = event.target.value
    }

    const confirmPasswordChange = (event) => {
        user["confirmPassword"] = event.target.value
    }

    function Klik() {

        if(user["password"]=="")
        {
            alert("Ne sme da bude prazno!!!")
            return
        }
        if(user["password"]!=user["confirmPassword"])
        {
            alert("Sifre moraju da budu iste!!!")
            return
        }
        var datum = new Date(Date.parse(location.state.vrednosti.datum_pravljenja_naloga))
        var datum2=((datum.getMonth() > 8) ? (datum.getMonth() + 1) : ('0' + (datum.getMonth() + 1))) + '/' + ((datum.getDate() > 9) ? datum.getDate() : ('0' + datum.getDate())) + '/' + datum.getFullYear()
        user["datum_pravljenja_naloga"] = datum2+", 00:00:00 AM"
        user["kogaid"] = location.state.vrednosti.id
        var vrednost = "?kogaid=" + user['kogaid'] + "&email=" + user['email'] + "&ime=" + user['ime'] + "&prezime=" + user['prezime'] + "&username=" + user['username'] + "&datum_rodjenja=" + user['datum_rodjenja'] + "&datum_pravljenja_naloga=" + user['datum_pravljenja_naloga'] + "&password=" + user['password'];
        requestPost('http://localhost:8080/api/user/edit', vrednost)
    }

    user['email'] = location.state.vrednosti.email;
    user['ime'] = location.state.vrednosti.ime;
    user['prezime'] = location.state.vrednosti.prezime;
    user['username'] = location.state.vrednosti.username;
    user['datum_rodjenja'] = location.state.vrednosti.datum_rodjenja;

    return (<>
        <div className="glavni">
      <Navbar />
      <div className="container2">
        <div className="left-sidebar">
          <div className="imp-links">
            <a href="/log"><img src="../assets/news.png" />Posts</a>
            <a href="/myprofile" className="chosen"><img src="../assets/friends.png" />My profile</a>
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
        <div className="main-content2">
          <form className="write-post-container2">
            <h1 className="myProfileNaslov">Edit Profile</h1>
            <hr className="myLine" />

            <label><b className="bold">New Password</b></label>
            <input type="password" className="myimput" onChange={passwordChange}/>

            <label><b className="bold">Confirm New Password</b></label>
            <input type="password" className="myimput" onChange={confirmPasswordChange}/>

            <input type="hidden" className="myimput" />

            <input type="hidden" className="myimput" />

            <input type="hidden" className="myimput" />

            <input type="hidden" className="myimput" />

            <input type="hidden" className="myimput" />
            <hr className="myLine" />
          </form>
        </div>
        <div className="right-sidebar">
          <button className="registerbtn" onClick={() => { Klik() }}><b>Save</b></button><br />
        </div>
      </div>
    </div>
    </>)
}