import React, { useState, useEffect } from "react";
import "./complex.css";
import "../components/complex/Recommand";
import ChampionList from "../components/championcomponents/ChampionList";
import OutCome from "../components/complex/OutCome";
import axios from "axios";

function Complex({ comrate }) {
  // 조합승률 콘솔에뜨는 d
  const [imageUrl, setImageUrl] = useState("");
  const [isClicked, setClicked] = useState("line");
  const [champions, setChampions] = useState([]);
  const [championName, setchampionName] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setchampionName(e.target.value);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://blog.galbimandudev.com/champion"
        );
        console.log(response.data);
        setChampions(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsers();
  }, []);
  // const
  const clickMathc = (e) => {
    setClicked(() => e.target.id);
  };
  const onClick = (e) => {
    console.log(e.target);
    setImageUrl(() => e.target.src);
  };

  return (
    <div className="comContainer">
      <div className="comBtn">
        <button className="lineBtn" id="line" onClick={clickMathc}>
          라인전
        </button>
        <button className="lineBtn" id="han" onClick={clickMathc}>
          한타
        </button>
      </div>

      <div className="comBox">
        <ChampionList
          chamipons={champions}
          championName={championName}
          onClick={onClick}
        />
      </div>
      <OutCome isClicked={isClicked} imageUrl={imageUrl} />
    </div>
  );
}

export default Complex;
