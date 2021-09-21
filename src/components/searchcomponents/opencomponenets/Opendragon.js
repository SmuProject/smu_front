import React from "react";
import Ograph from "./Ograph";

function Opendragon({ cat, dragon, baron, cat1, dragon1, baron1 }) {
  return (
    <div className="openDragon">
      <div className="monster">
        <div className="cat">{cat}전령 0</div>
        <div className="dragon">{dragon}용 0</div>
        <div className="baron">{baron}바론 0</div>
      </div>

      <div className="monstermenu">
        <p>Total Kill</p>
        <p>Total Gold</p>
      </div>

      <div className="dragonGraph">
        <div>
          <Ograph />
        </div>
        <div>
          <Ograph />
        </div>
      </div>

      <div className="monster">
        <div className="cat">{cat1}전령 0</div>
        <div className="dragon">{dragon1}용 0</div>
        <div className="baron">{baron1}바론 0</div>
      </div>
    </div>
  );
}

export default Opendragon;
