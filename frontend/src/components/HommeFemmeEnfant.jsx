import { Link } from "react-router-dom"
import GarçonFille from "../assets/garçonfilleaccueil2.jpg"
import "../style/Accueil.css"

import Femmeaccueil from "../assets/femmeaccueil.jpeg"
import Hommeaccueil from "../assets/hommeaccueil.jpeg"


function HommeFemmeEnfant() {
    return(
        <div className="accueil">
            <div className="grid">
                    <div className="un">
            <Link to="/femmes">
                <img className="accueil-femme" src={Femmeaccueil} alt="image femme" />
            <h2 className="categoriesAccueil">FEMMES</h2>
            </Link>
        </div><div className="deux">
                <Link to="/homme">
                    <img className="accueil-homme" src={Hommeaccueil} alt="image homme" />
                <h2 className="categoriesAccueil">HOMMES</h2>
                </Link>
            </div>

                    <div className="trois">
                        <Link to="/enfant">
                        <img className="accueil-garçonfille" src={GarçonFille} alt="image homme" />
                     
                        <h2 className="categoriesAccueil">ENFANT</h2>
                        </Link>
                    </div>
                
            </div> 
            
        </div>
    );
}

export default HommeFemmeEnfant;