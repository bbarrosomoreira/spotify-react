import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <nav className="footer__navigation">
      <div className="text">
        <p className="disclaimer-premium__title">Testar o Premium de graça</p>
        <p className="disclaimer-premium__subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div className="disclaimer-premium__button">
        <button type="button">Inscreva-se grátis</button>
      </div>
    </nav>
  );
};

export default Footer; // Export the Footer component
