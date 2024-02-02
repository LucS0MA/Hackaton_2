import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardArticle from "../components/CardArticle";
// import ModalArticle from "../components/ModalArticle";
import "../style/Enfant.css";

const Enfant = () => {
  const [articles, setArticles] = useState([]);
  const { souscategorie } = useParams();
  // const [modalOpen, setModalOpen] = useState(false);
  // const [urlImage, setUrlImage] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [reference, setReference] = useState("");
  // const [sizes, setSize] = useState([]);
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
        setArticles(filteredData);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, [souscategorie]);
  // const handleClickArticle = (url, title, desc, price, ref, sizes) => {
  //   setModalOpen(true);
  //   setUrlImage(url);
  //   setTitle(title);
  //   setDescription(desc);
  //   setPrice(price);
  //   setReference(ref);
  //   setSize(sizes);
  // };
  return (
    <>
      <div className="conteneur-images">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-item"
            onClick={() => {
              handleClickArticle(
                article.picture,
                article.titre,
                article.description,
                article.prix,
                article.reference,
                article.taille
              );
            }}
          >
            <CardArticle filteredData={article} />
          </div>
        ))}
      </div>
      {/* {modalOpen && (
        <ModalArticle
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          urlImage={urlImage}
          title={title}
          description={description}
          price={price}
          reference={reference}
          sizes={sizes}
        />
      )} */}
    </>
  );
};

export default Enfant;
