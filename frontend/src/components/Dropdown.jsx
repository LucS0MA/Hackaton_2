import { useState } from "react";
import { Link } from "react-router-dom";
import burgerBarImage from "../assets/burger-bar.png";
import "../style/Dropdown.css";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="containt">
      <button onClick={toggleDropdown}>
        <img className="menuBurger" src={burgerBarImage} alt="Menu" />
      </button>
      {isOpen && (
        <ul className="menu">
          <li className="liste">
            <Link to="/homme">Homme</Link>
            <ul className="sous-menu">
              <li>
                <Link to="/homme/souscategorie1">Sous-catégorie 1</Link>
              </li>
              <li>
                <Link to="/homme/souscategorie2">Sous-catégorie 2</Link>
              </li>
            </ul>
          </li>
          <li className="liste">
            <Link to="/femme">Femme</Link>
            <ul className="sous-menu">
              <li>
                <Link to="/femme/souscategorie1">Sous-catégorie 1</Link>
              </li>
              <li>
                <Link to="/femme/souscategorie2">Sous-catégorie 2</Link>
              </li>
            </ul>
          </li>
          <li className="liste">
            <Link to="/enfant">Enfant</Link>
            <ul className="sous-menu">
              <li>
                <Link to="/enfant/souscategorie1">Sous-catégorie 1</Link>
              </li>
              <li>
                <Link to="/enfant/souscategorie2">Sous-catégorie 2</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
