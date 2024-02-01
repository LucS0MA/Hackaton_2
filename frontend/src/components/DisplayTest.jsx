import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "../style/DisplayTest.css";

function DisplayTest() {
  const { handleClickAdd } = useContext(ShopContext);
  const [listItems, getListItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => getListItems(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);

  return (
    <>
      <h2>SHOP</h2>
      <div className="conteneur-images">
        {listItems.map((item) => {
          return (
            <div className="Cards" key={item.id}>
              <img
                src={`http://localhost:5000${item.picture}`}
                alt={item.titre}
                className={(item.id + 1) % 5 === 0 ? "large" : ""}
              />
              <p>{item.titre}</p>
              <button
                onClick={() => {
                  handleClickAdd(item);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayTest;
