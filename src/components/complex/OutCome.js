import React, { useEffect, useState } from "react";
import ListRecommand from "./ListRecommand";
import axios from "axios";
import * as _ from "lodash";
import Recommand from "./Recommand";
import styled from "styled-components";

const FlexDiv = styled.div`
  flex: 1;
  text-align: center;
  border-radius: 5px;
  background-color: #d1b350;
  padding-top: 30px;
  height: 50px;
  margin-bottom: 20px;
`;

function OutCome({ chamiponNumber, imageUrl, championName }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (chamiponNumber) => {
      try {
        const rep = await axios.get(
          "https://blog.galbimandudev.com/champion/comb/" + chamiponNumber
        );
        setData(rep.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(chamiponNumber);
    // setData([]);
  }, [chamiponNumber]);

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        backgroundColor: "wheat",
        overflowY: "scroll",
        width: "500px",
      }}
    >
      <div>
        {imageUrl !== "" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
              overflowY: "scroll",
            }}
          >
            <div style={{ display: "flex" }}>
              <FlexDiv>조합</FlexDiv>
              <FlexDiv>챔피언1</FlexDiv>
              <FlexDiv>챔피언2</FlexDiv>
              <FlexDiv>챔피언3</FlexDiv>
              <FlexDiv>승률</FlexDiv>
            </div>
            <ListRecommand data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default OutCome;
