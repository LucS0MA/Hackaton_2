import { Link } from "react-router-dom";
import GarçonFille from "../assets/garçonfilleaccueil.jpg";
import "../style/Accueil.css";
import Femmeaccueil from "../assets/femmeaccueil.jpeg";
import Hommeaccueil from "../assets/hommeaccueil.jpeg";

function HommeFemmeEnfant() {
  return (
    <div className="accueil">
      <div className="grid">
        <div className="un">
            <img
              className="accueil-femme"
              src={Femmeaccueil}
              alt="image femme"
            />
             <Link to="/femme">
            <h2 className="categoriesFemme">FEMMES</h2>
          </Link>
        </div>
        <div className="deux">
            <img
              className="accueil-homme"
              src={Hommeaccueil}
              alt="image homme"
            />
             <Link to="/homme">
            <h2 className="categoriesHomme">HOMMES</h2>
          </Link>
        </div>
        <div className="trois">
            <img
              className="accueil-garçonfille"
              src={GarçonFille}
              alt="image homme"
            />
          <Link to="/enfant">
            <h2 className="categoriesEnfant">ENFANT</h2>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HommeFemmeEnfant;
