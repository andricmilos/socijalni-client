import "../styles/Login.css"
import Image from "../assets/pozadinaNova.png"

export default function Logout(){
    return(<>
        <div className="pozadina">
            <img src={Image} alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Logout
                </span>
            </div>
            <h1>Uspesno ste se izlogovali !!!</h1><br/>
            <a href="/login">Back to Login</a><br/><br/>
            <a href="/">Back to landing page</a>
        </div>
    </>)
}