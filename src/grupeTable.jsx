import React, { useState, useEffect } from 'react';
import requestPost from './RequestPost';
import "../src/styles/GrupeTable.css"


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

    function Sub(vrednost) {
        requestPost('http://localhost:8080/api/group/subscribe/', vrednost,"Grupe")
    }

    function Unsub(vrednost) {
        requestPost('http://localhost:8080/api/group/unsubscribe/', vrednost,"Grupe")
    }

    return (
        <>

            {tbodyData.map((key, index) => {
                return (
                    <div className="post-container" key={key.id}>
                        <div className="user-profile">
                            <div>
                                <p>{key.ime}</p>
                            </div>
                            <div className='div-btn-sub'>
                                <button className='btn-sub' onClick={() => { Sub(key.id); }}>Subscribe</button>
                                <button className='btn-unsub' onClick={() => { Unsub(key.id); }}>Unsubscribe</button>
                            </div>
                        </div>
                        <p className="post-text">{key.opis}</p>
                    </div>
                );
            })}

        </>);

}