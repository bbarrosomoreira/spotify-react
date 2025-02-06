import React from "react";
import "./sidebar.css";
import logoSpotify from "../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className="sidebar">
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
                <FontAwesomeIcon icon={faHome} />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faSearch} />
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} />
            <span>Sua biblioteca</span>
          </button>
          <FontAwesomeIcon icon={faPlus} />
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
            <FontAwesomeIcon icon={faGlobe} />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; // Export the Sidebar component
