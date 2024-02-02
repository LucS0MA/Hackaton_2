import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import closed from "../assets/close.png";
import "../style/Cart.css";

function Cart() {
  const {
    cart,
    total,
    handleClickRemove,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(ShopContext);
  return (
    <main className="CartBody">
      {cart.length > 0 ? (
        <div className="BigContainer">
          <div className="EveryArticles">
            <h1 className="TitleCart">VOTRE PANIER</h1>
            {cart.map((item) => {
              return (
                <div className="Articles" key={item.id}>
                  <div className="ImageX">
                    <img
                      src={`http://localhost:5000${item.picture}`}
                      alt={item.titre}
                      className="Pics"
                    />
                    <div
                      className="X"
                      onClick={() => handleClickRemove(item.id)}
                    >
                      <img src={closed} alt="" className="X" />
                    </div>
                  </div>
                  <p className="Titles">{item.titre}</p>
                  <p className="Price">{item.prix * item.quantity} PO</p>
                  <p className="Quantity">Quantité: {item.quantity}</p>
                  <button
                    className="AddDel"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="AddDel"
                    onClick={() => {
                      handleDecreaseQuantity(item.id);
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
          <div className="TotalContainer">
            <div className="TotalTexts">
              <p className="TotalLabel">Prix total:</p>
              <p className="TotalAmount">{total} PO</p>
            </div>
            <button className="Paiement">Payer</button>
          </div>
        </div>
      ) : (
        <div className="NoArticlesContainer">
          <h1 className="NoArticles">
            Vous n'avez aucuns articles dans votre panier
          </h1>
          <Link to={"/"}>
            <div role="button" className="BackToShop">
              Continuer vos achats
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
