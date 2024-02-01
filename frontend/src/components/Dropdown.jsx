import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="containt">
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <ul className="Menu">
          <li className="Liste">Homme</li>
          <li className="Liste">Femme</li>
          <li className="Liste">Enfant</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
