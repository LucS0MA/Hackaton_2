/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import dfesign from "../assets/dfesign.png";
import dfesign1 from "../assets/dfesign1.png";
import "../style/Navbar.css";
import FavoriteLogo from "../assets/favoriteLogo.png";

function Navbar({ onSelectCard }) { // Assurez-vous de déstructurer les props ici
  const { cart, getTotalItems } = useContext(ShopContext);

  return (
    <>
      <div className="title">
        <img src={dfesign} alt="" className="designBordure" />
        <Link className="titre" to="/">
          <h1 className="titre">VESTIS</h1>
        </Link>
        <img src={dfesign1} alt="" className="designBordure" />
      </div>
      <nav className="navbar">
        <Dropdown />
        <SearchBar onSelectCard={onSelectCard} />
        <div className="nav-logos">
          <Link to="/favorites">
          <img src={FavoriteLogo} alt="favorite logo" className="favoriteNav"/>
          </Link>
        <Link to="/panier">
          <img
            src="../src/assets/panier1.png"
            alt="Panier"
            className="panierNav"
          />
          {cart.length > 0 ? (
            <div className="NmbrArticles">{getTotalItems}</div>
          ) : null}
        </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
