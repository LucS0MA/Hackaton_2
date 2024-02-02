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

function Navbar({ setSelectedImageUrl }) {
  const { cart } = useContext(ShopContext);

  return (
    <>
      <div className="title">
        <img src={dfesign} alt="" className="designBordure" />
        <h1 className="titre">VESTIS</h1>
        <img src={dfesign1} alt="" className="designBordure" />
      </div>
      <nav className="navbar">
        <Dropdown />
        <SearchBar setSelectedImageUrl={cart} />
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
            <div className="NmbrArticles">{cart.length}</div>
          ) : null}
        </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
