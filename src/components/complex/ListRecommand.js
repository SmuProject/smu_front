import React, { useEffect, useState } from "react";
import Recommand from "./Recommand";
import * as _ from "lodash";
function ListRecommand({ data }) {
  const [comb1, setComb1] = useState([]);
  const [comb2, setComb2] = useState([]);
  const [comb3, setComb3] = useState([]);
  const [comb4, setComb4] = useState([]);
  const [comb5, setComb5] = useState([]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const setting = (data2) => {
      const filterData = data2.filter((item) => item.winCnt + item.loseCnt > 3);
      const sortingData = _.chain(filterData)
        .orderBy(["winRate"], ["desc"])
        .value();
      return sortingData;
    };
    const d1 = setting(data.comb1);
    const d2 = setting(data.comb2);
    const d3 = setting(data.comb3);
    const d4 = setting(data.comb4);
    const d5 = setting(data.comb5);
    if (
      d1.length === 0 &&
      d2.length === 0 &&
      d3.length === 0 &&
      d4.length === 0 &&
      d5.length === 0
    ) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    setComb1(d1);
    setComb2(d2);
    setComb3(d3);
    setComb4(d4);
    setComb5(d5);
  }, [data]);

  return (
    <div>
      {check === false ? (
        <div>
          <Recommand data={comb1} comb="원거리 딜러 - 서포터 - 정글" />
          <Recommand data={comb2} comb="정글 - 원딜 - 서포터" />
          <Recommand data={comb3} comb="정글 - 미드 - 탑" />
          <Recommand data={comb4} comb="미드 - 정글 - 탑" />
          <Recommand data={comb5} comb="서폿 - 원딜 - 정글" />
        </div>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

export default ListRecommand;
