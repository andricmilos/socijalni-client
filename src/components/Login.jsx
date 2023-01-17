import "../styles/Login.css"
import {Link} from "react-router-dom"
export default function Login(){
    return(<>
        <div className="pozadina">
            <img src="../assets/pozadinaNova.png" alt="" />
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
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="password" name="password" placeholder="Password"  />
                        <div className="input-pre">
                            <img src="../assets/key.png" alt="" />
                        </div>
                    </div>
                    <div className="text-button">Forgotten your password?</div>
                </div>
                <div className="landing-form-actions">
                    <div className="btn-medium">
                        <Link to="/log">Login</Link>
                        <div className="inline-loader"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}