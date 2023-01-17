import "../styles/Login.css"

export default function ConfirmRegistration(){
    return(<>
        <div className="pozadina">
            <img src="../assets/pozadinaNova.png" alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Confirm Registration
                </span>
            </div>
            <h1>Uspesno ste aktivirali nalog</h1><br/>
            <a href="/login">Go to Login</a><br/><br/>
            <a href="/">Go to lending page</a>
        </div>
    </>)
}