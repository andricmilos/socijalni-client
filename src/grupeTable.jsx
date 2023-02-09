import React, { useState, useEffect } from 'react';


export default function GrupeTable({ url }) {

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
                    setPodaci(jsonData)
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
                                <p>{key.ime}</p>
                            </div>
                        </div>
                        <p className="post-text">{key.opis}</p>
                    </div>
                );
            })}

        </>);

}