import "../styles/Login.css"
import Image from "../assets/pozadinaNova.png"
import Image2 from "../assets/account.png"
import Image3 from "../assets/key.png"
export default function Login(){
    return(<>
        <div className="pozadina">
            <img src={Image} alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Login
                </span>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="username" placeholder="Username or email"  />
                        <div className="input-pre">
                            <img src={Image2} alt="" />
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
                    <div className="text-button">Forgotten your password?</div>
                </div>
                <div className="landing-form-actions">
                    <div className="btn-medium">
                        Login
                        <div className="inline-loader"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}