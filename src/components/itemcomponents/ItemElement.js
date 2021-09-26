import React, { useEffect } from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export default function ItemElement({ item, index }) {
  return (
    <ItemBox>
      <div style={{ flex: 1, textAlign: "center" }}>{index + 1}</div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          className="getimg"
          src={item.item_1.image_link}
          alt={item.item_1.item_name}
        />
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          className="getimg"
          src={item.item_2.image_link}
          alt={item.item_2.item_name}
          style={{ flex: 1, textAlign: "center" }}
        />
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          className="getimg"
          src={item.item_3.image_link}
          alt={item.item_3.item_name}
        />
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>{item.pickRate * 100}%</div>
      <div style={{ flex: 1, textAlign: "center" }}>{item.winRate * 100}%</div>
    </ItemBox>
  );
}
