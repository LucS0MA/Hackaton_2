import "../style/Navbar.css";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import dfesign from "../assets/dfesign.png";

function Navbar({ setSelectedImageUrl }) {
  return (
    <>
      <div className="title">
        <img src={dfesign} alt="" className="designBordure" />
        <h1 className="titre">VESTIS</h1>
        <img src={dfesign} alt="" className="designBordure" />
      </div>
      <nav className="navbar">
        <Dropdown />
        <SearchBar setSelectedImageUrl={setSelectedImageUrl} />
        <Link to="/panier">
          <img src="../src/assets/market_1.png" alt="Panier" />
        </Link>
      </nav>
    </>
  );
}
export default Navbar;
