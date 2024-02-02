import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardArticle from "../components/CardArticle";
import "../style/Enfant.css";

const Enfant = () => {
  const [articles, setArticles] = useState([]);
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
        setArticles(filteredData);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des images:", error)
      );
  }, [souscategorie]);

  return (
    <>
      <div className="conteneur-images">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <CardArticle filteredData={article} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Enfant;
