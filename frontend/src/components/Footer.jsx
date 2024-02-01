import "../style/Footer.scss";

function Footer() {
    return (
        <section className="footer">
            <div className="footer-column">
                <div>
                    <p>Service client</p>
                    <p>Suivre votre commande</p>
                    <p>Livraison</p>
                    <p>Retours</p>
                </div>
                <div>
                    <p>Mentions légales</p>
                    <p>Paramètres des cookies</p>
                </div>
                <div>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>X</p>
                    <p>Tiktok</p>
                    <p>Youtube</p>
                </div>
                <div>
                    <p>S'inscrire à la newsletter</p>
                </div>
            </div>
            <div className="footer-title">
                <h2>VESTIS SHOP</h2>
                <p>- Tous droits réservés -</p>
            </div>
        </section>
    );
}

export default Footer;