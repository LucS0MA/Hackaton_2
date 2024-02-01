/* eslint-disable react/jsx-key */
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import ModalArticle from "./components/ModalArticle";

function App() {
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
      <ModalArticle
        urlImage={listItems[0].picture}
        title={listItems[0].titre}
        description={listItems[0].description}
        price={listItems[0].prix}
        reference={listItems[0].reference}
        size={listItems[0].taille}
      />

      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
