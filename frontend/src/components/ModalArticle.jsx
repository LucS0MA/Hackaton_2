/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import addShop from "../assets/add-shop.png";
import "../style/ModalArticle.css";

function ModalArticle() {
  // {
  //     urlImage,
  //     title,
  //     description,
  //     price,
  //     reference,
  //     size,
  //   }
  const [dataHommes, setDataHomme] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  // const [listItems, setListItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        const infoHommes = data.filter((item) => item.categorie === "Homme");
        setDataHomme(infoHommes);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, []);

  const handleInput = (event) => {
    const items = event.target.value;
    console.info(items);
    setItemsQuantity(items);
  };
  const handleCloseModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="modalContainer">
      {dataHommes.map((man, index) => (
        <div className="modalCard" key={index}>
          <div className="buttonClose" onClick={handleCloseModal}>
            {" "}
            <button> Fermer </button>{" "}
          </div>
          <div className="modalImgContainer">
            <img
              className="modalImage"
              src={`http://localhost:5000${man.picture}`}
              alt={man.titre}
            />
          </div>
          <div className="infoModalContainer">
            <h2 className="modalTitle">{man.titre}</h2>
            <p className="modalDesc">{man.description}</p>
            <span className="modalRef"> Réf : {man.reference}</span>
            <span className="modalPrice"> Prix : {man.prix} PO</span>

            {/* <button className="addToFavorites" type="button">Ajouter dans les favoris</button> */}
          </div>
          <div className="quantitySelectModal">
            <label htmlFor="size-select">Choisi ta taille :</label>
            <select className="selectSize" name="sizes" id="size-select">
              {man.taille.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <label htmlFor="quantity"> Quantité : </label>
            <input
              className="quantityInput"
              type="number"
              id="quantityInput"
              name="quantity"
              onChange={handleInput}
              value={itemsQuantity}
              max={10}
              min={1}
            />
            <button className="addShoppingCard" type="submit">
              <img className="addShoppingCardImg" src={addShop} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModalArticle;

// {modalOpen ? <ModalArticle
//   urlImage={homme.picture}
//   title={homme.titre}
//   description={homme.description}
//   price={homme.prix}
//   reference={homme.reference}
//   size={homme.taille}
//   setModalDisplay={closeModal}
// />}
