import React, { useEffect } from "react";

export default function ItemElement({ item, index }) {
  return (
    <div className='itemOut'>
      <div className='Item'>
        <div className='itemRanked'>{index + 1}</div>
        <img
          className="getimg"
          src={item.item_1.image_link}
          height="280"
          width="180"
          alt={item.item_1.item_name}
        />
        <img
          className="getimg"
          src={item.item_2.image_link}
          height="280"
          width="180"
          alt={item.item_2.item_name}
        />
        <img
          className="getimg"
          src={item.item_3.image_link}
          height="280"
          width="180"
          alt={item.item_3.item_name}
        />
        </div>

        <div className='itemRates'>{item.pickRate * 100}%</div>
        <div className='itemRates2'>{item.winRate * 100}%</div>

    </div>
  );
}
