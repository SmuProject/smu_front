import React, { useState, useEffect } from "react";
import "./line.css";
import styled from "styled-components";
import * as _ from "lodash";
import axios from "axios";
import LineList from "../components/linecomponents/List";

const Div = styled.div`
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
  height: 900px;
`;

function Line() {
  const [data, setData] = useState([]);
  const [call, setCall] = useState(0);
  useEffect(() => {
    const lane = async () => {
      const rep = await axios.get(
        "https://blog.galbimandudev.com/champion/lane"
      );
      setData(rep.data);
      setCall(1);
    };

    if (call === 0) {
      lane();
    }
  }, []);

  return (
    <div>
      <div className="selectBg">
        <h1>라인별 승률 순위</h1>
      </div>
      <div>
        <Div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
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
          </div>
          <div style={{ height: "100px ", textAlign: "center" }}>
            트리 만들어서 라인전 한타 버튼 제거 및 승률 표시할 때 가장 높은 지표
            가진 라인만 반영하여 표시하였습니다.(연관 라인은 표시하지 않음)
            <br /> 각 챔피언의 파워 포인트는 킬, 데스, 어시스트, CS, 레벨 등의
            지표를 반영하여 산출하였습니다.
          </div>
        </Div>
      </div>
    </div>
  );
}

export default Line;
