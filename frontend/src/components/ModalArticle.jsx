/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style/ModalArticle.css";

function ModalArticle({
  urlImage,
  title,
  description,
  price,
  reference,
  size,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <p>
        <img src={`http://localhost:5000/assets/${urlImage}`} alt={title} />
      </p>
    </div>
  );
}

export default ModalArticle;
