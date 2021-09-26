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

      {item.item_1.items_Id !== 0 && (
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            className="getimg"
            src={item.item_1.image_link}
            alt={item.item_1.item_name}
          />
        </div>
      )}

      {item.item_2.items_Id !== 0 && (
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            className="getimg"
            src={item.item_2.image_link}
            alt={item.item_2.item_name}
            style={{ flex: 1, textAlign: "center" }}
          />
        </div>
      )}

      {item.item_3.items_Id !== 0 && (
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            className="getimg"
            src={item.item_3.image_link}
            alt={item.item_3.item_name}
          />
        </div>
      )}

      <div style={{ flex: 1, textAlign: "center" }}>
        {Math.round(item.pickRate * 100).toFixed(2)}%
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        {Math.round(item.winRate * 100).toFixed(2)}%
      </div>
    </ItemBox>
  );
}
