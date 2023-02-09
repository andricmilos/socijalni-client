import React, { useState, useEffect } from 'react';

function ulepsajDatum(string) {
    var novi = new Date(string);
    return novi.toDateString();
}

export default function Table({ url }) {

    var urlGroup = "http://localhost:8080/api/group/svi";

    const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
    var tbodyData = podaci

    useEffect(() => {
        fetch(url, { mode: 'cors', credentials: 'include' })
            .then(response => response.json())
            .then((jsonData) => {
                if (jsonData[0] == null) {
                    setPodaci([{ "no value": "No data" }])
                }
                else {
                    // setPodaci(jsonData)


                    fetch(urlGroup, { mode: 'cors', credentials: 'include' })
                        .then(response => response.json())
                        .then((jsonData2) => {
                            if (jsonData2[0] != null) {
                                var count = Object.keys(jsonData).length;

                                for (var i = 0; i < count; i++) {


                                    if (jsonData[i].grupe != null) {
                                        var listaaa = jsonData[i].grupe.split(",")
                                        var nePostoji = true

                                        jsonData2.map((key, index) => {

                                            if (listaaa.includes(key.id.toString())) {

                                                jsonData[i].grupe = key.ime;
                                                nePostoji = false
                                            }

                                        })

                                        if (nePostoji) {
                                            jsonData[i].grupe = "";
                                        }

                                    }

                                }

                            }
                            setPodaci(jsonData)
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
            })
            .catch((error) => {
                setPodaci([{ "error": "Error" }])
                console.error(error)
            })
    }, []);

    return (
        <>

            {tbodyData.map((key, index) => {
                return (
                    <div className="post-container" key={key.id}>
                        <div className="user-profile">
                            <div>
                                <p>{key.naslov}</p>
                                <span>{ulepsajDatum(key.datum_postavljanja)}</span>
                            </div>
                        </div>
                        <p className="post-text">{key.tekst}</p><h3>{key.grupe}</h3>
                    </div>
                );
            })}

        </>);

}