import "../styles/Navigation.css"
import { useState } from "react"
import {Link} from "react-router-dom"

export default function NavigationMenu(){
    const [fix, setFix ] = useState(false)
    function setFixed() { 
        if (window.scrollY>=200) { 
            setFix(true) 
        }else {
            setFix(false) 
        }
    }
    window.addEventListener("scroll",setFixed)
    return(<>
        <div className={fix ? 'navbarScroll' : 'navbar'}>
            <div className="div1">
                <img src="../assets/logo.png" className="logo" alt=""/>
                <h2>IT-gram</h2>
            </div>
            <div className="div2">
                <Link to="login">Login</Link>
                <Link to="SignUp">Sign up</Link>
            </div>
        </div>
    </>
    )
}