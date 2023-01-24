import "../styles/MyProfile.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyProfile(){
    useEffect(() => {
        fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
          .then(response => response.json())
          .then((jsonData) => {
            alert(jsonData.ID)
          })
          .catch((error) => {
            console.error(error)
          })
      }, []);
    return(<>
   <form className="mojaForma">
        <div class="containera">
            <h1 className="myProfileNaslov">My Profile</h1>
            <hr className="myLine"/>

            <label><b className="bold">Email</b></label>
            <input type="email" className="myimput"/>

            <label><b className="bold">Ime</b></label>
            <input type="text" className="myimput"/>

            <label><b className="bold">Prezime</b></label>
            <input type="text" className="myimput"/>

            <label><b className="bold">Username</b></label>
            <input type="text" className="myimput"/>

            <label><b className="bold">Datum rodjenja</b></label>
            <input type="date" className="myimput"/>
            <hr className="myLine"/>

            <button type="submit" class="registerbtn">Register</button>
        </div>
    </form>
    </>)
}