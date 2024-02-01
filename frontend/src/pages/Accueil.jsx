import { useState, useEffect } from "react";
import HommeFemmeEnfant from "../components/HommeFemmeEnfant";
import NewsLetters from "../components/NewsLetters";

function Accueil() {
  const [listItems, getListItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => getListItems(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);
  console.info(listItems[0]);
  return (
    <>
      <NewsLetters />
      <HommeFemmeEnfant />
      {/* {listItems !== undefined ? (
        <ModalArticle
          urlImage={listItems[0].picture}
          title={listItems[0].titre}
          description={listItems[0].description}
          price={listItems[0].prix}
          reference={listItems[0].reference}
          size={listItems[0].taille}
        />
      ) : (
        <div>no data</div>
      )} */}
    </>
  );
}

export default Accueil;
