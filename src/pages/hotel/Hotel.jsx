import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import List from "../list/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Rezervasyon Yap</button>
          <h1 className="hotelTitle"> Granada Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Belek / Antalya </span>
          </div>
          <span className="hotelDistance">
            Mükemmel Lokasyonuyla Granada Hotel Antalya Merkeze 500m Uzaklıkta
          </span>
          <span className="hotelPriceHighlight">
            Şimdi Günlüğü 4500₺'den Rezervasyon Yap, Hemen Ücretsiz Havaalanı
            Taksi Fırsatını Yakala!!
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hetlTitle">
                Antalya'nın Gözde Oteli Granada Belek
              </h1>
              <p className="hotelDesc">
                Granada Otel, Antalya'nın merkezinde konuklarına konforlu ve
                lüks bir konaklama deneyimi sunan benzersiz bir oteldir. Modern
                tasarımı, zarif dekorasyonu ve özenle düzenlenmiş odalarıyla
                Granada Otel, misafirlerine unutulmaz bir tatil vaat ediyor.
                Otelimizde, konforunuz için tasarlanmış geniş ve konforlu
                odalar, modern olanaklarla donatılmış özel banyolar ve güzel
                manzaralı balkonlar bulunmaktadır. Granada Otel, konuklarına
                kusursuz bir dinlenme atmosferi sunmak adına özenle seçilmiş
                detaylarla döşenmiş geniş alanlarıyla öne çıkmaktadır.
                Gastronomi konusunda da iddialı olan Granada Otel, misafirlerine
                yöresel ve uluslararası lezzetleri sunan özel restoranlarıyla
                gastronomi yolculuğunuza eşlik ediyor. Ayrıca, otelimizin lobi
                barında günün yorgunluğunu atabilir, ferahlatıcı içeceklerle
                keyifli anlar yaşayabilirsiniz.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Harika Geçecek 9 Gece</h1>
              <span>
                Granada Otel, 9.8 Puanıyla Antalya'nın merkezinde konfor ve
                lüksü bir araya getirerek unutulmaz bir konaklama deneyimi
                sunuyor.
              </span>
              <h2>
                <b>4500₺</b> (9 Gece)
              </h2>
              <button>Rezervasyon Yap</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
