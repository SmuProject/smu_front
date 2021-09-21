import axios from "axios";
import { React, useEffect, useState, useMemo } from "react";
import "./itemcombination";
import "./itembox.css";
import Itemcombination from "./itemcombination";
import styled from "styled-components";
const ColDiv = styled.div`
  width: 750px;
  height: 500px;
  background-color: lightblue;
`;

const RowDiv = styled.div`
  display: flex;
`;

const Itembox = ({ chamiponNumber }) => {
  const [itemboxList, setItemboxList] = useState([]);

  const [line, setLine] = useState(["TOP"]);
  useEffect(() => {
    const getItemRank = async () => {
      try {
        const rep = await axios.get(
          "https://blog.galbimandudev.com/itemrank/" + chamiponNumber
        );
        console.log(rep.data);
        setItemboxList(rep.data);
        setLine("TOP");
      } catch (error) {
        console.error(error);
      }
    };
    getItemRank();
  }, [chamiponNumber]);

  return (
    <div>
      <ColDiv>
        <RowDiv>
          <button
            onClick={() => setLine("TOP")}
            type="button"
            className="itemBtn"
          >
            TOP
          </button>
          <button
            onClick={() => setLine("JUNGLE")}
            type="button"
            className="itemBtn"
          >
            JUNGLE
          </button>
          <button
            onClick={() => setLine("MIDDLE")}
            type="button"
            className="itemBtn"
          >
            MID
          </button>
          <button
            onClick={() => setLine("BOTTOM")}
            type="button"
            className="itemBtn"
          >
            BOT
          </button>
          <button
            onClick={() => setLine("SUPPORT")}
            type="button"
            className="itemBtn"
          >
            SUP
          </button>
        </RowDiv>

        <Itemcombination itembox={itemboxList} line={line} />
      </ColDiv>
    </div>
  );
};

export default Itembox;
