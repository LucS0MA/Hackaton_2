import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
      const vetementsFemme = data.filter(
        (vetement) => vetement.categorie === "Femme"
      );
      setListVetement(vetementsFemme);
      const vetementsEnfant = data.filter(
        (vetement) => vetement.categorie === "Enfant"
      );
      setListVetement(vetementsEnfant);
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
      setSelectedImageUrl(imageUrl); // Met à jour l'URL de l'image sélectionnée dans le composant parent
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
  );
};

SearchBar.propTypes = {
  setSelectedImageUrl: PropTypes.func.isRequired,
};

export default SearchBar;