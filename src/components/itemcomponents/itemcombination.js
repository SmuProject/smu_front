import { React, useEffect, useState } from "react";
import "../itemcomponents/itemcombination.css";
import styled from "styled-components";
import ItemElement from "./ItemElement";

function Itemcombination({ itembox, line }) {
  const [topTen, setTopTen] = useState([]);
  const [isempty, setIsempty] = useState(0);
  useEffect(() => {
    const filteredList = (line) => {
      return itembox.filter((item) => item.lane === line);
    };

    const data = filteredList(line).slice(0, 3);
    console.log("!!!! >>> ", data);
    setTopTen(data);

    if (data.length === 0) {
      setIsempty(0);
    } else {
      setIsempty(1);
    }
  }, [itembox, line]);
  return (
    <div>
      <div>
        {isempty === 0 ? (
          <div>검색된 결과가 없습니다.</div>
        ) : (
          topTen.map((data, index) => (
            <div>
              <ItemElement item={data} index={index} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Itemcombination;
