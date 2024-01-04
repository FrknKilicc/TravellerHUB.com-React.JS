import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Şehrin Merkezinde DreamsTeams Daire</h1>
        <span className="siDistance">Merkeze 150 Metre</span>
        <span className="siTaxiOp">Ücretsiz Havaalanı Taksi</span>
        <span className="siSubtitle">Klimalı</span>
        <span className="siFeatures">
          Tüm daire • 1 banyo • 21m² • 1 çift kişilik yatak
        </span>
        <span className="siCancelOp">Koşulsuz İptal</span>
        <span className="siCancelOpSubtitle">
          Bu harika fiyatı bugün yakala!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Çok İyi!</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">11200₺</span>
          <span className="siTaxOp">Vergiler Dahil</span>
          <button className="siCheckButton">Rezervasyon Yap</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
