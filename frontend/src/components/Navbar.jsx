import "../style/Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import dfesign from "../assets/dfesign.png";
import dfesign1 from "../assets/dfesign1.png";

function Navbar() {
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
        <SearchBar />
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
      </nav>
    </>
  );
}
export default Navbar;
