import React from "react";
import "./line.css";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  height: 1000px;
`;

const ChampDiv = styled.div`
  margin-top: 10px;
  width: 67%;
  width: 300px;
  height: 500px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

function line() {
  return (
    <>
      <div className="selectBg">
        <select className="select">
          <option value="1">Top</option>
          <option value="2">Mid</option>
          <option value="3">Jungle</option>
          <option value="4">Bottom</option>
          <option value="5">Supporter</option>
        </select>
      </div>

      <Div>
        <TimeDiv>
          <button className="timeBtn">0 - 10min</button>
          <ChampDiv></ChampDiv>
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">10 - 20min</button>
          <ChampDiv></ChampDiv>
        </TimeDiv>

        <TimeDiv>
          <button className="timeBtn">20 - 30min</button>
          <ChampDiv></ChampDiv>
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">30 - 40min</button>
          <ChampDiv></ChampDiv>
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">40min -</button>
          <ChampDiv></ChampDiv>
        </TimeDiv>
      </Div>

      <div className="footer"></div>
    </>
  );
}

export default line;
