/* eslint-disable react/prop-types */
import "../style/CardArticle.scss";
import CardImage from "../assets/OIG4.png";
import { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import heart from "../assets/heart.png";
import heartFull from "../assets/heartFull.png";

function CardArticle({ filteredData }) {
  const { handleClickAdd } = useContext(ShopContext);
  const [favorite, setFavorite] = useState(heart);

  const handleClickFavorite = () => {
    if (favorite === heart) {
      setFavorite(heartFull);
    } else {
      setFavorite(heart);
    }
  };

  return (
    <section>
      <main className="card-section">
        <img
          className="card-image"
          src={`http://localhost:5000${filteredData.picture}`}
          alt={filteredData.titre}
        />
        <div className="card-informations">
          <div className="card-text">
            <h2 className="card-text-title">{filteredData.titre}</h2>
            <p className="card-text-price">{filteredData.prix} PO</p>
            <h1 className="titleVestisCard">VESTIS</h1>
          </div>
          <img
            className="card-favorite"
            src={favorite}
            alt=""
            onClick={handleClickFavorite}
          />
        </div>
        {/* <button
          className="card-cart"
          onClick={() => {
            handleClickAdd(filteredData);
          }}
        >
          Add To Cart
        </button> */}
      </main>
    </section>
  );
}

export default CardArticle;
