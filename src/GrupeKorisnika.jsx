import React, { useState, useEffect } from 'react';
import "../src/styles/GrupeKorisnika.css"
export default function GrupeKorisnika() {
  var urlGroup = "http://localhost:8080/api/group/svi";

  const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
  var tbodyData = podaci
  useEffect(() => {
    fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
      .then(response => response.json())
      .then((jsonData) => {
        fetch('http://localhost:8080/api/user/' + jsonData.ID, { mode: 'cors', credentials: 'include' })
          .then(response => response.json())
          .then((jsonData) => {
            setPodaci(jsonData)

            fetch(urlGroup, { mode: 'cors', credentials: 'include' })
              .then(response => response.json())
              .then((jsonData2) => {
                if (jsonData2[0] != null) {

                  if (jsonData.grupe != null) {
                    var listaaa = jsonData.grupe.split(",")
                    var resenje = "";

                    jsonData2.map((key, index) => {
                      if (listaaa.includes(key.id.toString())) {
                        resenje += '<a class="uvlacenjeGrupe" href="/log/' + key.id.toString() + '">' + key.ime + '</a>';
                      }
                    })

                    document.getElementById("nesto").innerHTML = resenje
                  } else {
                    document.getElementById("nesto").innerHTML = '<a class="uvlacenjeGrupe">Nemate grupe</a>';
                  }
                }
              })
              .catch((error) => {
                console.error(error)
              })
          })
          .catch((error) => {
            setPodaci("nista")
            console.error(error)
          })
      })
      .catch((error) => {
        setPodaci("nista")
        console.error(error)
      })
  }, []);

  return (<>
    <ul id="nesto" ></ul>
  </>)
}