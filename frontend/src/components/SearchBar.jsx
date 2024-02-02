import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/SearchBar.css";
import '../assets/search.png'

const SearchBar = ({ setSelectedImageUrl }) => {
  const [listVetement, setListVetement] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
    .then((response) => response.json())
    .then((data) => {
      const vetementsHomme = data.filter(
        (vetement) => vetement.categorie === "Homme"
      );
      setListVetement(vetementsHomme);
    })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  const handleClick = (event) => {
    const selectedTitle = event.target.value;
    const selectedItem = listVetement.find(
      (item) => item.titre === selectedTitle
    );
    if (selectedItem) {
      const imageUrl = `http://localhost:5000${selectedItem.picture}`;
      setSelectedImageUrl(imageUrl); 
    }
  };

  return (
    <div>
      <form>
        <select onChange={handleClick}>
          <option value="">Sélectionner un titre</option>
          {listVetement.map((listVetements) => (
            <option key={listVetements.id} value={listVetements.titre}>
              {listVetements.titre}
            </option>
          ))}
        </select>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     className="SearchBar"
    //     type="text"
    //     placeholder="Recherche..."
    //     value={searchTerm}
    //     onChange={handleChange}
    //   />
    // </form>
  );
};

SearchBar.propTypes = {
  setSelectedImageUrl: PropTypes.func.isRequired,
};

export default SearchBar;