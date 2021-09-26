import React, { useState, useEffect } from "react";
import * as _ from "lodash";
function Recommand({ data, comb }) {
  const [combData, setCombData] = useState([]);
  useEffect(() => {
    console.log(data);

    setCombData(data);
  }, [data]);

  return (
    <>
      <div>
        {combData.length !== 0 && (
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>{comb}</div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src={combData[0].champ1.imageLink} alt="" />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src={combData[0].champ2.imageLink} alt="" />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src={combData[0].champ3.imageLink} alt="" />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              {Math.round(combData[0].winRate * 100).toFixed(2) < 0.1
                ? 0.1
                : Math.round(combData[0].winRate * 100).toFixed(2)}
              %
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Recommand;
