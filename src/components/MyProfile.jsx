import "../styles/MyProfile.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

export default function MyProfile() {
  var data;
  useEffect(() => {
    fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
      .then(response => response.json())
      .then((jsonData) => {
        fetch('http://localhost:8080/api/user/' + jsonData.ID, { mode: 'cors', credentials: 'include' })
          .then(response => response.json())
          .then((jsonData) => {
            data = JSON.parse(jsonData)
            console.log(jsonData)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);

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
            <h1 className="myProfileNaslov">My Profile</h1>
            <hr className="myLine" />

            <label><b className="bold">Email</b></label>
            <input type="email" className="myimput" />

            <label><b className="bold">Ime</b></label>
            <input type="text" className="myimput" />

            <label><b className="bold">Prezime</b></label>
            <input type="text" className="myimput" />

            <label><b className="bold">Username</b></label>
            <input type="text" className="myimput" />

            <label><b className="bold">Datum rodjenja</b></label>
            <input type="date" className="myimput" />
            <hr className="myLine" />

            <button type="submit" class="registerbtn">Register</button>
          </form>
        </div>
        <div className="right-sidebar"></div>
      </div>
    </div>
  </>)
}