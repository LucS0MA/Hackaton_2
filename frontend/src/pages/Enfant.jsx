import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/Enfant.css";

const Enfant = () => {
  const [images, setImages] = useState([]);
  const { souscategorie } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data.filter((item) => item.categorie === "Enfant");
        if (souscategorie) {
          filteredData = filteredData.filter(
            (item) => item.souscategorie === souscategorie
          );
        }
        setImages(filteredData);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, [souscategorie]);

  return (
    <div className="conteneur-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={`http://localhost:5000${image.picture}`}
          alt={image.titre}
          className={(index + 1) % 5 === 0 ? "large" : ""}
        />
      ))}
    </div>
  );
};

export default Enfant;
