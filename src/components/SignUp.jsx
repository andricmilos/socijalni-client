import "../styles/SignUp.css"
import Image from "../assets/pozadinaNova.png"
import Image2 from "../assets/account.png"
import Image3 from "../assets/key.png"
import Image4 from "../assets/calendar.png"
// import Image4 from "./"
// import Image5 from "./"
// import Image6 from "./"
export default function Login(){
    return(<>
        <div className="pozadina">
            <img src={Image} alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Sign in
                </span>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="ime" placeholder="Name"  />
                        <div className="input-pre">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="prezime" placeholder="Surname"  />
                        <div className="input-pre">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="username" placeholder="Username"  />
                        <div className="input-pre">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="date" name="datum_rodjenja" />
                        <div className="input-pre">
                            <img src={Image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="password" name="password" placeholder="Password"  />
                        <div className="input-pre">
                            <img src={Image3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="landing-form-actions">
                    <div className="btn-medium">
                        Sign up
                        <div className="inline-loader"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}