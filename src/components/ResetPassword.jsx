import "../styles/ResetPassword.css"
import Image from "../assets/pozadinaNova.png"
import Image2 from "../assets/account.png"

export default function ResetPassword(){
    return(<>
        <div className="pozadina">
            <img src={Image} alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Reset Password
                </span>
            </div>
            <h1>Unesi svoj email ako zelite da resetujete sifru</h1><br/>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="email" name="email" placeholder="Email"  />
                        <div className="input-pre">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-form-actions">
                    <div className="btn-medium">
                        Potvrdi
                    </div>
                </div>
        </div>
    </>)
}