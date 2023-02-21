import "../styles/PocetnaSaznajVise.css"

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
                        <img src="../assets/logo.png" alt="" />
                    </div>
                    <div className="Spacer"></div>
                    <div className="Text">
                        <h1>Sta je IT-gram?</h1>
                        <p>IT-gram je platforma koja sluzi da priblizi sve porgramere na jednom mestu. IT-gram je drustvena mreza posvecena iskljucivo programerima odnosno svim IT strucnjacima. Dodji i pridruzi nam se na mestu gde se spajaju svi IT strucnjaci na svetu!</p>
                    </div>
                </div>
            </div>
        </div><br /><br /><br />
        <div className="div-copy">
            <span className="kraj">
                &#169;Andric Co. 2022 Copyright
            </span>
        </div>
    </>)
}