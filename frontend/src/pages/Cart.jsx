import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
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
            {cart.map((item) => {
              return (
                <div className="Articles" key={item.id}>
                  <img
                    src={`http://localhost:5000${item.picture}`}
                    alt={item.titre}
                    className="Pics"
                  />
                  <p className="Titles">{item.titre}</p>
                  <p className="Price">{item.prix * item.quantity} PO</p>
                  <p className="Quantity">Quantity: {item.quantity}</p>
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
                  <button
                    className="X"
                    onClick={() => handleClickRemove(item.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="TotalContainer">
            <p className="TotalLabel">Total Price</p>
            <span>:</span>
            <p className="TotalAmount">{total} PO</p>
            <button className="Paiement">Pay</button>
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
