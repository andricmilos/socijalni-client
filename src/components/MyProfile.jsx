import "../styles/MyProfile.css"
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import LeftSide from "../LeftSide";

export default function MyProfile() {

  var urlGroup = "http://localhost:8080/api/group/svi";

  var finale = "Loading...";
  var myError = JSON.parse("{\"id\":-1,\"email\":\"Error...\",\"ime\":\"Error...\",\"prezime\":\"Error...\",\"username\":\"Error...\",\"datum_rodjenja\":\"Error...\",\"datum_pravljenja_naloga\":\"Error...\",\"aktiviran\":\"true\"}")
  const [podaci, setPodaci] = useState(JSON.parse("{\"id\":-1,\"email\":\"Loading...\",\"ime\":\"Loading...\",\"prezime\":\"Loading...\",\"username\":\"Loading...\",\"datum_rodjenja\":\"Loading...\",\"datum_pravljenja_naloga\":\"Loading...\",\"aktiviran\":\"true\"}"));
  useEffect(() => {
    fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
      .then(response => response.json())
      .then((jsonData) => {
        fetch('http://localhost:8080/api/user/' + jsonData.ID, { mode: 'cors', credentials: 'include' })
          .then(response => response.json())
          .then((jsonData) => {
            var datum = new Date(Date.parse(jsonData.datum_rodjenja))
            jsonData.datum_rodjenja = datum.toISOString().split('T')[0]
            setPodaci(jsonData)

            fetch(urlGroup, { mode: 'cors', credentials: 'include' })
              .then(response => response.json())
              .then((jsonData2) => {
                finale = ""
                if (jsonData2[0] != null) {

                  if (jsonData.grupe != null) {
                    var listaaa = jsonData.grupe.split(",")

                    var pocetak = false;
                    jsonData2.map((key, index) => {

                      if (listaaa.includes(key.id.toString())) {
                        if (pocetak) {
                          finale += ","
                        }
                        finale += key.ime;

                        pocetak = true;
                      }

                    })
                    document.getElementById("gupeId").value = finale
                  }
                }
              })
              .catch((error) => {
                console.error(error)
              })
          })

          .catch((error) => {
            setPodaci(myError);
            console.error(error)
          })
      })
      .catch((error) => {
        setPodaci(myError);
        console.error(error)
      })
  }, []);




  const navigate = useNavigate();

  return (<>
    <div className="glavni">
      <Navbar />
      <div className="container2">
        <LeftSide odakle="myprofile" />
        <div className="main-content2">
          <form className="write-post-container2">
            <h1 className="myProfileNaslov">My Profile</h1>
            <hr className="myLine" />

            <label><b className="bold">Email</b></label>
            <input type="email" className="myimput" value={podaci.email} readOnly={true} />

            <label><b className="bold">Ime</b></label>
            <input type="text" className="myimput" value={podaci.ime} readOnly={true} />

            <label><b className="bold">Prezime</b></label>
            <input type="text" className="myimput" value={podaci.prezime} readOnly={true} />

            <label><b className="bold">Username</b></label>
            <input type="text" className="myimput" value={podaci.username} readOnly={true} />

            <label><b className="bold">Datum rodjenja</b></label>
            <input type="date" className="myimput" value={podaci.datum_rodjenja} readOnly={true} />

            <label><b className="bold">Grupe u kojima se nalazite</b></label>
            <input type="text" className="myimput" id="gupeId" readOnly={true} />
            <hr className="myLine" />
          </form>
        </div>
        <div className="right-sidebar">
          <button className="registerbtn" onClick={() => { navigate("/editProfile", { state: { vrednosti: podaci } }) }}><b>Edit Profile</b></button><br />
          <button className="registerbtn" onClick={() => { navigate("/editPassword", { state: { vrednosti: podaci } }) }}><b>Change Password</b></button>
        </div>
      </div>
    </div>
  </>)
}