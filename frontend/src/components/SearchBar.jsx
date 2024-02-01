import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listVetement, setListVetement] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setListVetement(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event) => {
    const selectedTitle = event.target.value;
    const selectedItem = listVetement.find(
      (item) => item.titre === selectedTitle
    );
    if (selectedItem) {
      // Construisez l'URL complète en concaténant l'adresse de base avec l'URL relative de l'image
      const imageUrl = `http://localhost:5000${selectedItem.picture}`;
    
      // Mettez à jour l'URL de l'image sélectionnée dans l'état de votre composant
      setSelectedImageUrl(imageUrl);
    }
  
  };

  return (
    <>
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
      {selectedImageUrl && ( // Afficher l'image si une URL est sélectionnée
        <div>
          <img src={selectedImageUrl} alt="Image sélectionnée" />
        </div>
      )}
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;