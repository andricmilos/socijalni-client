import React, { useState, useEffect } from 'react';
import CommentTable from './CommentTable';
import requestPost from "./RequestPost";

function ulepsajDatum(string) {
    var novi = new Date(string);
    return novi.toDateString();
}

export default function Table({ url }) {

    var urlGroup = "http://localhost:8080/api/group/svi";

    const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
    var tbodyData = podaci

    useEffect(() => {
        fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' }).then((response) => response.json()).then((theData) => {
            let mojUrl = url;
            if (mojUrl.includes("http://localhost:8080/api/post/svi/")) {
                mojUrl = url + theData.ID;
            }
            fetch(mojUrl, { mode: 'cors', credentials: 'include' })
                .then(response => response.json())
                .then((jsonData) => {
                    if (jsonData[0] == null) {
                        setPodaci([{ "no value": "No data" }])
                    }
                    else {
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
        }).catch((error) => {
            setPodaci([{ "error": "Error" }])
            console.error(error)
        })
    }, []);

    function Klik(pid, sadrzaj) {
        fetch('http://localhost:8080/api/user/ulogovani', { mode: 'cors', credentials: 'include' })
            .then(response => response.json())
            .then((jsonData) => {
                var vrednost = "?userId=" + jsonData.ID + "&postId=" + pid + "&sadrzaj=" + sadrzaj + "&datum_postavljanja=" + new Date().toLocaleString();
                requestPost('http://localhost:8080/api/comment/add', vrednost, "Comment")
            })
            .catch((error) => {
                setPodaci(myError);
                console.error(error)
            })
    }

    return (
        <>

            {tbodyData.map((key, index) => {
                if (key.id == null) {
                    return;
                }
                return (
                    <div className="post-container" key={key.id}>
                        <div className="user-profile">
                            <div>
                                <p>{key.naslov}</p>
                                <span>{ulepsajDatum(key.datum_postavljanja)}</span>
                            </div>
                        </div>
                        <p className="post-text">{key.tekst}</p><h3 className="post-text">Grupa: {key.grupe}</h3><br />
                        <CommentTable url={"http://localhost:8080/api/comment/from/" + key.id} />
                        <label className="labels">Add comment</label><br />
                        <textarea type="text" id={key.id + "-com"} className="text-input" /><br />
                        <button type='button' className="button-create" onClick={() => { Klik(key.id, document.getElementById(key.id + "-com").value) }}>Comment</button>
                    </div>
                );
            })}

        </>);

}