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
                <Link to="/homme/Vetements">Vetements</Link>
              </li>
              <li>
                <Link to="/homme/Chaussures">Chaussures</Link>
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
            <Link to="/femme">Femme</Link>
            <ul className="sous-menu">
              <li>
                <Link to="/femme/Vetements">Vetements</Link>
              </li>
              <li>
                <Link to="/femme/Chaussures">Chaussures</Link>
              </li>
              <li>
                <Link to="/femme/Accessoires">Accessoires</Link>
              </li>
            </ul>
          </li>
          <li className="liste">
            <Link to="/enfant">Enfant</Link>
            <ul className="sous-menu">
              <li>
                <Link to="/enfant/Vetements">Vetements</Link>
              </li>
              <li>
                <Link to="/enfant/Chaussures">Chaussures</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
