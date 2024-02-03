import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/SearchBar.css";
import CardArticle from "./CardArticle";

function SearchBar({ onSelectCard }) {
  const [value, setValue] = useState("");
  const [listVetement, setListVetement] = useState([]);
  const [visibleCard, setVisibleCard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setListVetement(data));
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleItemClick = (titre) => {
    setValue(titre);
    const selected = listVetement.find((item) => item.titre === titre);
    setVisibleCard(selected);
    onSelectCard(selected);
  };

  return (
    <div>
      <div className="inputsearch">
        <input
          className="SearchBar"
          type="text"
          placeholder="Recherche..."
          value={value}
          onChange={handleChange}
        />
      </div>
      <ul>
        {value &&
          listVetement
            .filter((listVetements) =>
              listVetements.titre.toLowerCase().includes(value.toLowerCase())
            )
            .map((listVetements) => (
              <li
                onClick={() => handleItemClick(listVetements.titre)}
                key={listVetements.id}
              >
                {listVetements.titre}
              </li>
            ))}
      </ul>

    </div>
  );
}

SearchBar.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
};

export default SearchBar;
