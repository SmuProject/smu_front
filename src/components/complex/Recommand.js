import React, { useState, useEffect } from "react";
import * as _ from "lodash";
function Recommand({ data, comb }) {
  const [combData, setCombData] = useState([]);
  useEffect(() => {
    console.log(data);
    const filterData = data.filter((item) => item.winCnt + item.loseCnt > 0);
    console.log(comb, " >>> ", filterData);
    const sortingData = _.chain(filterData)
      .orderBy(["winRate"], ["desc"])
      .value();
    console.log(comb, " >>> ", sortingData);
    setCombData(sortingData);
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
              {combData[0].winRate}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Recommand;
