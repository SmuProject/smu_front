import React, { useState, useEffect } from "react";
import "./complex.css";
import "../components/complex/Recommand";
import ChampionList from "../components/championcomponents/ChampionList";
import OutCome from "../components/complex/OutCome";
import axios from "axios";

import styled from "styled-components";

const ChampionBox = styled.div`
  width: 640px;
  height: 500px;
  background-color: skyblue;
  overflow-y: scroll;
  margin-left: 200px;
  padding-left: 30px;
`;
function Complex({ comrate }) {
  // 조합승률 콘솔에뜨는 d
  const [imageUrl, setImageUrl] = useState("");
  const [champions, setChampions] = useState([]);
  const [chamiponNumber, setChampionNumber] = useState(0);
  const [championName, setchampionName] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://blog.galbimandudev.com/champion"
        );
        // console.log(response.data);
        setChampions(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsers();
  }, []);

  const onClick = (e) => {
    // console.log(e.target);
    setChampionNumber(() => e.target.id);
    setImageName(() => e.target.alt);
    setImageUrl(() => e.target.src);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "10px",
        width: "1500px",
      }}
    >
      <ChampionBox>
        <ChampionList
          chamipons={champions}
          championName={championName}
          onClick={onClick}
        />
      </ChampionBox>
      <OutCome
        imageUrl={imageUrl}
        chamiponNumber={chamiponNumber}
        championName={imageName}
      />
    </div>
  );
}

export default Complex;
