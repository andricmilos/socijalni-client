import requestPost from '../RequestPost';

export default function Login(){

    var user = { "email": "", "ime": "", "prezime": "", "username": "", "datum_rodjenja": "", "datum_pravljenja_naloga": "", "password": "",  "confirmPassword": "" }

    const emailChange = (event) => {
        user["email"] = event.target.value
    }

    const imeChange = (event) => {
        user["ime"] = event.target.value
    }

    const prezimeChange = (event) => {
        user["prezime"] = event.target.value
    }

    const usernameChange = (event) => {
        user["username"] = event.target.value
    }

    const passwordChange = (event) => {
        user["password"] = event.target.value
    }

    const confirmPasswordChange = (event) => {
        user["confirmPassword"] = event.target.value
    }

    const datumRodjenjaChange = (event) => {
        user["datum_rodjenja"] = event.target.value
    }

    function Klik() {

        if(user['password']!=user['confirmPassword'])
        {
            alert("Password's are not same")
            return
        }

        user["datum_pravljenja_naloga"] = new Date().toLocaleString()
        var vrednost = "?email=" + user['email'] + "&ime=" + user['ime'] + "&prezime=" + user['prezime'] + "&username=" + user['username'] + "&datum_rodjenja=" + user['datum_rodjenja'] + "&datum_pravljenja_naloga=" + user['datum_pravljenja_naloga'] + "&password=" + user['password'];
        requestPost('http://localhost:8080/api/user/add', vrednost,"signup")
    }

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
                        <input type="text" name="ime" placeholder="Name" onChange={imeChange} />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="prezime" placeholder="Surname" onChange={prezimeChange} />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="text" name="username" placeholder="Username" onChange={usernameChange}/>
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="email" name="email" placeholder="Email" onChange={emailChange} />
                        <div className="input-pre">
                            <img src="../assets/account.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="date" name="datum_rodjenja" onChange={datumRodjenjaChange}/>
                        <div className="input-pre">
                            <img src="../assets/calendar.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" onChange={passwordChange}/>
                        <div className="input-pre">
                            <img src="../assets/key.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in-basic">
                <div className="landing-form-row">
                    <div className="input-wrapper">
                        <input type="password" placeholder="Confirm password" onChange={confirmPasswordChange} />
                        <div className="input-pre">
                            <img src="../assets/key.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="landing-form-actions">
                    <div className="btn-medium" onClick={() => { Klik() }}>
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    </>)
}