import React, { useState, useEffect } from "react";
import "./line.css";
import styled from "styled-components";
import * as _ from "lodash";
import axios from "axios";
import LineList from "../components/linecomponents/List";

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

function Line() {
  const [data, setData] = useState([]);
  const [call, setCall] = useState(0);
  useEffect(() => {
    const lane = async () => {
      const rep = await axios.get("/champion/lane");

      console.log(rep.data);
      setData(rep.data);
      setCall(1);
    };

    if (call === 0) {
      lane();
    }
  }, []);

  return (
    <>
      <div className="selectBg">
        <h1>라인별 승률 순위</h1>
      </div>

      <Div>
        <TimeDiv>
          <button className="timeBtn">TOP</button>
          <LineList data={data} lineName={"TOP"} />
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">MIDDLE</button>
          <LineList data={data} lineName={"MIDDLE"} />
        </TimeDiv>

        <TimeDiv>
          <button className="timeBtn">JUNGLE</button>
          <LineList data={data} lineName={"JUNGLE"} />
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">BOTTOM</button>
          <LineList data={data} lineName={"BOTTOM"} />
        </TimeDiv>
        <TimeDiv>
          <button className="timeBtn">SUPPORT</button>
          <LineList data={data} lineName={"NONE"} />
        </TimeDiv>
      </Div>

      <div className="footer"></div>
    </>
  );
}

export default Line;
