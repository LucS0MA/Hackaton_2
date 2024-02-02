/* eslint-disable react/prop-types */
import "../style/CardArticle.scss";
import { useState, useEffect } from "react";
import ModalArticle from "../components/ModalArticle";
import heart from "../assets/heart.png";
import heartFull from "../assets/heartFull.png";
import "../style/CardArticle.scss";

function CardArticle({ filteredData }) {
  const [favorite, setFavorite] = useState(heart);
  const [modalOpen, setModalOpen] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [reference, setReference] = useState("");
  const [sizes, setSize] = useState([]);

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
  const handleClickArticle = (url, title, desc, price, ref, sizes) => {
    setModalOpen(true);
    setUrlImage(url);
    setTitle(title);
    setDescription(desc);
    setPrice(price);
    setReference(ref);
    setSize(sizes);
  };
  console.info(urlImage);
  return (
    <section>
      <main className="card-section">
        <img
          className="card-image"
          src={`http://localhost:5000${filteredData.picture}`}
          alt={filteredData.titre}
          onClick={() => {
            handleClickArticle(
              filteredData.picture,
              filteredData.titre,
              filteredData.description,
              filteredData.prix,
              filteredData.reference,
              filteredData.taille
            );
          }}
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
            onClick={() => handleClickFavorite(filteredData)}
          />
          {modalOpen && (
            <ModalArticle
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              urlImage={urlImage}
              title={title}
              description={description}
              price={price}
              reference={reference}
              sizes={sizes}
              favorite={favorite}
              onClickFavorite={handleClickFavorite}
            />
          )}
        </div>
      </main>
    </section>
  );
}

export default CardArticle;
