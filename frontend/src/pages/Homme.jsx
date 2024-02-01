import { useState, useEffect } from "react";
import "../style/Homme.css";
// import ModalArticle from "../components/ModalArticle";

const Homme = () => {
  const [dataHommes, setDataHomme] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [listItems, setListItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        const imagesHomme = data.filter((item) => item.categorie === "Homme");
        setDataHomme(imagesHomme);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, []);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <div className="conteneur-images">
      {dataHommes.map((homme, index) => (
        <img
          key={index}
          src={`http://localhost:5000${homme.picture}`}
          alt={homme.titre}
          className={(index + 1) % 5 === 0 ? "large" : ""}
          // onClick={openModal} // La troisième image, la sixième, etc., seront grandes
        />
        // {modalOpen ? <ModalArticle
        //   urlImage={homme.picture}
        //   title={homme.titre}
        //   description={homme.description}
        //   price={homme.prix}
        //   reference={homme.reference}
        //   size={homme.taille}
        //   setModalDisplay={closeModal}
        // />}
      ))}
    </div>
  );
};

export default Homme;
