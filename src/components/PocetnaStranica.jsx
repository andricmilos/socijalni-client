import "../styles/PocetnaSaznajVise.css"
import Image from "../assets/logo.png"
export default function PocetnaSaznajVise(){
    return(<>
        <div className="container">
            <div className="centriranTekst">
                <h1>
                    Dobro dosli <br></br>
                    Drustvena mreza za programere
                </h1>
                <h1 className="naslov">IT-gram</h1>
                <br/>
                <a href="#nekiId">
                    <button>
                        Saznaj vise 
                    </button>
                </a>
            </div>
        </div>
        <div className="oFirmi" id="nekiId">
            <div className="container-text">
                <div className="FrontPageSection">
                    <div className="Image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="Spacer"></div>
                    <div className="Text">
                        <h1>Sta je IT-gram?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex hic atque nobis beatae possimus voluptas! Iusto maiores libero nostrum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quas quibusdam asperiores consectetur deleniti dolores consequatur fugiat odit doloribus nisi!</p>
                    </div>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="div-copy">
            <span className="kraj">
                &#169;Andric Co. 2022 Copyright
            </span>
        </div>
    </>)
}