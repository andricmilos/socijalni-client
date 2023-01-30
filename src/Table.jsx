import React, { useState, useEffect } from 'react';

function ulepsajDatum(string) {
    var novi = new Date(string);
    return novi.toDateString();
}

export default function Table({ url }) {

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
                console.log(key)
                return (
                    <div className="post-container">
                        <div className="user-profile">
                            <div>
                                <p>{key.naslov}</p>
                                <span>{ulepsajDatum(key.datum_postavljanja)}</span>
                            </div>
                        </div>
                        <p className="post-text">{key.tekst}</p>
                    </div>
                );
            })}

        </>);

}