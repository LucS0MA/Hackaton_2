/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import addShop from "../assets/add-shop.png";
import "../style/ModalArticle.css";

function ModalArticle({
  isOpen,
  onClose,
  urlImage,
  title,
  description,
  price,
  reference,
  sizes,
}) {
  const [itemsQuantity, setItemsQuantity] = useState(0);
  console.info(urlImage);
  const handleInput = (event) => {
    const items = event.target.value;
    console.info(items);
    setItemsQuantity(items);
  };

  return (
    <div className="modalContainer">
      <div className="modalCard">
        <div className="buttonClose">
          <button onClick={onClose}> Fermer </button>{" "}
        </div>
        <div className="modalImgContainer">
          <img
            className="modalImage"
            src={`http://localhost:5000${urlImage}`}
            alt={title}
          />
        </div>
        <div className="infoModalContainer">
          <h2 className="modalTitle">{title}</h2>
          <p className="modalDesc">{description}</p>
          <span className="modalRef"> Réf : {reference}</span>
          <span className="modalPrice"> Prix : {price} PO</span>

          {/* <button className="addToFavorites" type="button">Ajouter dans les favoris</button> */}
        </div>
        <div className="quantitySelectModal">
          <label htmlFor="size-select">Choisi ta taille :</label>
          <select className="selectSize" name="sizes" id="size-select">
            {sizes.map((size, index) => (
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
    </div>
  );
}

export default ModalArticle;
