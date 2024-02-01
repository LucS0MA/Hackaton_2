import { useState } from "react";
import { Link } from "react-router-dom";
import burgerBarImage from "../assets/burger-bar.png";
import "../style/Dropdown.css";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="containt">
      <button className="bntDropDown" onClick={toggleDropdown}>
        <img className="menuBurger" src={burgerBarImage} alt="Menu" />
      </button>
      {isOpen && (
        <ul className="menu">
          <li className="liste">
            <Link to="/homme" className="menuPrincipal">
              Homme
            </Link>
            <ul className="sous-menu">
              <li>
                <Link to="/homme/Vetements">Vetements</Link>
              </li>
              <li>
                <Link to="/homme/Chaussures">Sandales</Link>
              </li>
              <li>
                <Link to="/homme/Accessoires">Accessoires</Link>
              </li>
              <li>
                <Link to="/homme/Armures">Armures</Link>
              </li>
            </ul>
          </li>
          <li className="liste">
            <Link to="/femme" className="menuPrincipal">
              Femme
            </Link>
            <ul className="sous-menu">
              <li>
                <Link to="/femme/Vetements">Vetements</Link>
              </li>
              <li>
                <Link to="/femme/Chaussures">Sandales</Link>
              </li>
              <li>
                <Link to="/femme/Accessoires">Accessoires</Link>
              </li>
            </ul>
          </li>
          <li className="liste">
            <Link to="/enfant" className="menuPrincipal">
              Enfant
            </Link>
            <ul className="sous-menu">
              <li>
                <Link to="/enfant/souscategorie1">Vetements</Link>
              </li>
              <li>
                <Link to="/enfant/souscategorie2">Sandales</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
