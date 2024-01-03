import React from "react";
import "./footer.css";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Ülkeler</li>
          <li className="fListItem">Bölgeler</li>
          <li className="fListItem">Şehirler</li>
          <li className="fListItem">İlçeler</li>
          <li className="fListItem">Havalimanları</li>
          <li className="fListItem">Oteller</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ülkeler</li>
          <li className="fListItem">Bölgeler</li>
          <li className="fListItem">Şehirler</li>
          <li className="fListItem">İlçeler</li>
          <li className="fListItem">Havalimanları</li>
          <li className="fListItem">Oteller</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ülkeler</li>
          <li className="fListItem">Bölgeler</li>
          <li className="fListItem">Şehirler</li>
          <li className="fListItem">İlçeler</li>
          <li className="fListItem">Havalimanları</li>
          <li className="fListItem">Oteller</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ülkeler</li>
          <li className="fListItem">Bölgeler</li>
          <li className="fListItem">Şehirler</li>
          <li className="fListItem">İlçeler</li>
          <li className="fListItem">Havalimanları</li>
          <li className="fListItem">Oteller</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ülkeler</li>
          <li className="fListItem">Bölgeler</li>
          <li className="fListItem">Şehirler</li>
          <li className="fListItem">İlçeler</li>
          <li className="fListItem">Havalimanları</li>
          <li className="fListItem">Oteller</li>
        </ul>
      </div>
      <div className="fText">
        `<FontAwesomeIcon icon={faStarOfLife} /> Copyright &copy; 2024
        DreamTeamsSoftware <FontAwesomeIcon icon={faStarOfLife} />`
      </div>
    </div>
  );
};

export default Footer;
