import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as _ from "lodash";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px;
  background-color: skyblue;
`;

const ChampDiv = styled.div`
  margin-top: 10px;
  width: 67%;
  width: 400px;
  height: 800px;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: auto; /* Enable scroll if needed */
`;

const ChampBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

function Champ({ index, champData, point, winrate }) {
  return (
    <ChampBox>
      <div style={{ flex: 1, textAlign: "center" }}>{index}</div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <img src={champData.imageLink} alt={champData.championName} />
        {champData.championName}
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>{point}</div>
      <div style={{ flex: 1, textAlign: "center" }}>{winrate}</div>
    </ChampBox>
  );
}

export default function LineList({ data, lineName }) {
  const [line, setLine] = useState([]);

  useEffect(() => {
    const name = lineName;
    const sorting = _.chain(data)
      .filter({
        champLaneKey: { champLane: name },
      })
      .sortBy("point")
      .reverse()
      .value();

    if (line.length === 0) {
      // console.log(sorting);
      setLine(sorting);
    }
  }, [data, line]);

  return (
    <div>
      <ChampDiv>
        <HeaderDiv>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              margin: "10px",
            }}
          >
            순위
          </div>
          <div style={{ flex: 1, textAlign: "center", margin: "10px" }}>
            챔프
          </div>
          <div style={{ flex: 1, textAlign: "center", margin: "10px" }}>
            포인트
          </div>
          <div style={{ flex: 1, textAlign: "center", margin: "10px" }}>
            승률
          </div>
        </HeaderDiv>
        {line.map((champ, index) => (
          <div>
            <Champ
              index={index + 1}
              champData={champ.champLaneKey.myChamp}
              point={champ.point}
              winrate={champ.winrate}
            />
          </div>
        ))}
      </ChampDiv>
    </div>
  );
}
