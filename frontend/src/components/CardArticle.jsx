import "../style/CardArticle.scss";
import CardImage from "../assets/OIG4.png";
import { useState } from "react";
import heart from "../assets/heart.png";
import heartFull from "../assets/heartFull.png";

function CardArticle({ filteredData }) {
    const [favorite, setFavorite] = useState(heart);

    const handleClickFavorite = () => {
        if (favorite === heart) {
            setFavorite(heartFull);
        } else {
            setFavorite(heart);
        }
    }

    return (
        <section className="card-section">
            <img className="card-image" src={`http://localhost:5000${filteredData.picture}`} alt={filteredData.titre} />
            <div className="card-informations">
                <div className="card-text">
                    <h2 className="card-text-title">{filteredData.titre}</h2>
                    <p className="card-text-price">{filteredData.prix} PO</p>
                </div>
                <img className="card-favorite" src={favorite} alt="" onClick={handleClickFavorite} />
            </div>
        </section>
    );
}

export default CardArticle;