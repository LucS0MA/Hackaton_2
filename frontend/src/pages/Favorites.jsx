import CardArticle from "../components/CardArticle";
import "../style/Favorites.scss";
import { useState, useEffect } from "react";

function Favorites() {
    const [favorites, setFavorite] = useState([]);

    //   const favorites = characters.filter((item) => item.favorite);
    useEffect(() => {
      let dataLocalFav = localStorage.getItem("fav");
      // console.log("test", JSON.parse(dataLocalFav));
      setFavorite(JSON.parse(dataLocalFav));
    }, []);
  
    return (
        <section className="favorites-page">
            <h2 className="favorites-title">Retrouver vos articles favoris ici &#11206;</h2>
            <div className="favorites-card">
                {favorites?.map((favorite) => (
                    <CardArticle filteredData={favorite} />
                ))}
            </div>
        </section>
    );
}

export default Favorites;