import React from "react";
import "./header.css";
import smallLeft from "../assets/icons/small-left.png";
import smallRight from "../assets/icons/small-right.png";
import search from "../assets/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          placeholder="O que você quer ouvir?"
          value=""
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header; // Export the Header component
