import React from "react";
import "./sidebar.css";
import logoSpotify from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
  return (
    <nav className="sidebar__navigation">
      <div className="sidebar__navigation--content">
        <div className="logo">
          <a href="">
            <img src={logoSpotify} alt="Logo Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span className="fa fa-home"></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
        <div className="library">
          <div className="library__content">
            <button className="library__button">
              <span className="fa fas fa-book"></span>
              <span>Sua biblioteca</span>
            </button>
            <span className="fa fa-plus"></span>
          </div>
          <section className="section-playlist">
            <div className="section-playlist__content">
              <span className="text title">Crie sua primeira playlist</span>
              <span className="text subtitle">É fácil, vamos te ajudar.</span>
              <button className="section-playlist__button">
                <span>Criar playlist</span>
              </button>
            </div>
          </section>
          <div className="cookies">
            <a href="">Cookies</a>
          </div>
          <div className="languages">
            <button className="languages__button">
              <span className="fa fa-globe"></span>
              <span>Português do Brasil</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar; // Export the Sidebar component
