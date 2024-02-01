import "../style/Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <>
      <div className="title">VESTIS</div>
      <nav className="navbar">
        <Dropdown />
      </nav>
    </>
  );
}
export default Navbar;
