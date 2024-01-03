import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Zamandan ve Paradan Tasarruf Edin!</h1>
      <span className="mailDesc">
        Fırsatları Kaçırmamak İçin Bizden Haberdar Olun!
      </span>
      <div className="mailInputcontainer">
        <input type="text" placeholder="Mail Adresiniz" />
        <button>Kaydol</button>
      </div>
    </div>
  );
};

export default MailList;
