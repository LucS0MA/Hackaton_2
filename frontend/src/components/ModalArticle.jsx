/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import addShop from "../assets/panier2.png";
import CloseNl from "../assets/closeNL.png";
import "../style/ModalArticle.css";

function ModalArticle({
  onClose,
  urlImage,
  title,
  description,
  price,
  reference,
  sizes,
  favorite,
  onClickFavorite,
}) {
  const [itemsQuantity, setItemsQuantity] = useState(1);
  console.info(urlImage);
  const handleInput = (event) => {
    const items = event.target.value;
    console.info(items);
    setItemsQuantity(items);
  };
  const { handleClickAdd } = useContext(ShopContext);

  return (
    <div className="modalContainer">
      <div className="modalCard">
        <div className="buttonClose">
          <button onClick={onClose}>
            {" "}
            <img
              className="close-buttonModal"
              src={CloseNl}
              alt="close-button"
            />
          </button>{" "}
        </div>
        <div className="modalImgContainer">
          <img
            className="modalImage"
            src={`http://localhost:5000${urlImage}`}
            alt={title}
          />
        </div>
        <div className="infoModalContainer">
          <div className="modalTitleContainer">
            <h2 className="modalTitle">{title}</h2>{" "}
            <img
              className="card-favorite"
              src={favorite}
              alt=""
              onClick={onClickFavorite}
            />
          </div>
          <p className="modalDesc">{description}</p>
          <span className="modalRef"> Réf : {reference}</span>
          <span className="modalPrice"> Prix : {price} PO</span>
          {/* <button className="addToFavorites" type="button">Ajouter dans les favoris</button> */}
        </div>
        <div className="quantitySelectModal">
          <label htmlFor="size-select">Choisis ta taille :</label>
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
            <img
              className="addShoppingCardImg"
              src={addShop}
              alt=""
              onClick={() => {
                handleClickAdd({
                  id: reference, // Utilisez la référence comme ID unique
                  titre: title,
                  prix: price,
                  picture: urlImage,
                  quantity: itemsQuantity,
                });
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalArticle;
