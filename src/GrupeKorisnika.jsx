import React, { useState, useEffect } from 'react';
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

                        resenje += '<li style="color: black;">' + key.ime + '</li>';

                      }

                    })

                    document.getElementById("nesto").innerHTML = resenje
                  } else {
                    document.getElementById("nesto").innerHTML = '<li style="color: black;" >Nemate grupe</li>';
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