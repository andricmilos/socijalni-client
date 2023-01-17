import "../styles/Login.css"

export default function NeocekivanaGreska(){
    return(<>
        <div className="pozadina">
            <img src="../assets/pozadinaNova.png" alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    PAGE NOT FOUND
                </span>
            </div>
            <h1>Doslo je do greske !!!</h1><br/>
            <a href="/FAQ">Go to FAQ</a><br/><br/>
        </div>
    </>)
}