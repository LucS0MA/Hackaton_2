import "../style/Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import dfesign from "../assets/dfesign.png";

function Navbar() {
  const { cart } = useContext(ShopContext);
  return (
    <>
      <div className="title">
        <img src={dfesign} alt="" className="designBordure" />
        <h1 className="titre">VESTIS</h1>
        <img src={dfesign} alt="" className="designBordure" />
      </div>
      <nav className="navbar">
        <Dropdown />
        <SearchBar />
        <Link to="/panier">
          <img src="../src/assets/market_1.png" alt="Panier" />
          <span>{cart.length}</span>
        </Link>
      </nav>
    </>
  );
}
export default Navbar;
