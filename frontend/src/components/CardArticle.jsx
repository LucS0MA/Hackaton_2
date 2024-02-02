/* eslint-disable react/prop-types */
import "../style/CardArticle.scss";
import { useState, useEffect } from "react";
import heart from "../assets/heart.png";
import heartFull from "../assets/heartFull.png";

function CardArticle({ filteredData }) {
  const [favorite, setFavorite] = useState(heart);

  useEffect(() => {

    const pouletFavData = localStorage.getItem("fav");
    const datafav = JSON.parse(pouletFavData);

    if (datafav && datafav.find((elem) => elem.id === filteredData.id)) {
      setFavorite(heartFull);
    } else {
      setFavorite(heart);
    }
  }, [filteredData.id]);

  const handleClickFavorite = (cardInfo) => {
    let pouletFavData = localStorage.getItem("fav");
    let datafav = JSON.parse(pouletFavData);
    let tmp = [];

    if (datafav) {
      if (datafav.find((elem) => elem.id === cardInfo.id)) {
        setFavorite(heart);
        const dataFavFiltre = datafav.filter((elem) => elem.id !== cardInfo.id);
        tmp = dataFavFiltre;
      } else {
        setFavorite(heartFull);
        tmp = [...datafav, cardInfo];
      }
    } else {
      setFavorite(heartFull);
      tmp = [cardInfo];
    }

    localStorage.setItem("fav", JSON.stringify(tmp));
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
          </div>
          <img
            className="card-favorite"
            src={favorite}
            alt=""
            onClick={() => handleClickFavorite(filteredData)}
          />
        </div>
      </main>
    </section>
  );
}

export default CardArticle;
