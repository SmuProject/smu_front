import { React, useState, useEffect, useCallback, createContext } from "react";
import "./item.css";

import axios from "axios";
import ChampionList from "../championcomponents/ChampionList";
import Itembox from "./Itembox";
import styled from "styled-components";
export const Select = createContext("");
const ChampionBox = styled.div`
  width: 640px;
  height: 500px;
  background-color: skyblue;
  overflow-y: scroll;
  margin-left: 200px;
  margin-right: 10px;
  padding-left: 30px;
`;
const Div = styled.div`
  display: flex;
`;

function Item() {
  const [champions, setChampions] = useState([]);
  const [chamiponNumber, setChampionNumber] = useState(0);
  const [championName, setchampionName] = useState("");
  const [isClicked, setClicked] = useState(0);
  const [getData, setGetData] = useState(false);

  const onClick = (e) => {
    setChampionNumber(() => e.target.id);
  };

  const onChange = (e) => {
    // console.log(e.target.value);
    setchampionName(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://blog.galbimandudev.com/champion"
        );
        // console.log(response.data);
        setChampions(response.data);
        setGetData(true);
      } catch (e) {
        // console.error(e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="backG">
      <div className="searchBox">
        <input
          className="inputBox"
          placeholder="챔피언 이름을 입력해주세요."
          onChange={onChange}
        />
        <button type="submit" className="searchBtn">
          검색하기
        </button>
      </div>
      <Div>
        <ChampionBox>
          <ChampionList
            chamipons={champions}
            championName={championName}
            onClick={onClick}
          />
        </ChampionBox>

        {chamiponNumber === 0 ? (
          ""
        ) : (
          <div>
            <Itembox chamiponNumber={chamiponNumber} />
          </div>
        )}
      </Div>
    </div>
  );
}

export default Item;
