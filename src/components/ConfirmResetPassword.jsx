import "../styles/ResetPassword.css"

export default function ConfirmResetPassword(){
    return(<>
        <div className="pozadina">
            <img src="../assets/pozadinaNova.png" alt="" />
        </div>
        <div className="landing-form">
            <div className="title">
                IT-gram
                <span>
                    Confirm Reset Password
                </span>
            </div>
            <h1>Potvrdite svoju sifru</h1><br/>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="password" name="password" placeholder="Password"  />
                        <div className="input-pre">
                            <img src="../assets/key.png" alt="" />
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