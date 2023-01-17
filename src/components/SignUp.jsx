import "../styles/SignUp.css"

export default function Login(){
    return(<>
        <div className="pozadina">
            <img src="../assets/pozadinaNova.png" alt="" />
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
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="prezime" placeholder="Surname"  />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="username" placeholder="Username"  />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="email" name="email" placeholder="Email"  />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="date" name="datum_rodjenja" />
                        <div className="input-pre">
                            <img src="../assets/calendar.png" alt="" />
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