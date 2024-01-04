import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Ara</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <div className="lsOptions">
                <label>Seçenekler</label>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    En Düşük<small> / Gecelik</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    En Yüksek<small> / Gecelik</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Yetişkin</span>
                  <input
                    placeholder={options.adult}
                    min={1}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Çocuk</span>
                  <input
                    min={0}
                    placeholder={options.children}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Odalar</span>
                  <input
                    min={1}
                    placeholder={options.room}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
              </div>
              <button className="lsButton">Ara</button>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
