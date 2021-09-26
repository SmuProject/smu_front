import axios from "axios";
import { React, useEffect, useState, useMemo } from "react";
import "./itemcombination";
import "./itembox.css";
import Itemcombination from "./itemcombination";
import styled from "styled-components";
import * as _ from "lodash";

const ColDiv = styled.div`
  width: 750px;
  height: 500px;
  background-color: lightblue;
  overflow: auto; /* Enable scroll if needed */
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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
        const sorting = _.chain(rep.data).sortBy("pickRate").reverse().value();
        setItemboxList(sorting);
        console.log(sorting);
        setLine("TOP");
      } catch (error) {
        // console.error(error);
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
            style={{ flex: 1, textAlign: "center" }}
          >
            TOP
          </button>
          <button
            onClick={() => setLine("JUNGLE")}
            type="button"
            className="itemBtn"
            style={{ flex: 1, textAlign: "center" }}
          >
            JUNGLE
          </button>
          <button
            onClick={() => setLine("MIDDLE")}
            type="button"
            className="itemBtn"
            style={{ flex: 1, textAlign: "center" }}
          >
            MID
          </button>
          <button
            onClick={() => setLine("BOTTOM")}
            type="button"
            className="itemBtn"
            style={{ flex: 1, textAlign: "center" }}
          >
            BOT
          </button>
          <button
            onClick={() => setLine("SUPPORT")}
            type="button"
            className="itemBtn"
            style={{ flex: 1, textAlign: "center" }}
          >
            SUP
          </button>
        </RowDiv>

        <RowDiv
          style={{
            background: "white",
            border: "1px solid",
            height: "100px",
            borderRadius: "5px",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>순위</div>
          <div style={{ flex: 1, textAlign: "center" }}>아이템1</div>
          <div style={{ flex: 1, textAlign: "center" }}>아이템2</div>
          <div style={{ flex: 1, textAlign: "center" }}>아이템3</div>
          <div style={{ flex: 1, textAlign: "center" }}>픽률</div>
          <div style={{ flex: 1, textAlign: "center" }}>승률</div>
        </RowDiv>

        <Itemcombination itembox={itemboxList} line={line} />
      </ColDiv>
    </div>
  );
};

export default Itembox;
