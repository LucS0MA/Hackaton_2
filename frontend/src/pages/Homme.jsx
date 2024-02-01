import { useState, useEffect } from "react";
import "../style/Homme.css";

const Homme = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shop")
      .then((response) => response.json())
      .then((data) => {
        const imagesHomme = data.filter((item) => item.categorie === "homme");
        setImages(imagesHomme);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, []);

  return (
    <div className="conteneur-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={`http://localhost:5000${image.picture}`}
          alt={image.titre}
          className={(index + 1) % 5 === 0 ? "large" : ""} // La troisième image, la sixième, etc., seront grandes
        />
      ))}
    </div>
  );
};

export default Homme;
