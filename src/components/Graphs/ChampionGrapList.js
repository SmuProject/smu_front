import React, { useEffect, useContext } from "react";
import { Select } from "../../pages/Chamipon.js";
const ChampionGrapList = () => {
  const username = useContext(Select);

  useEffect(() => {}, [username]);

  return <div>this page is graphic part {username}</div>;
};

export default ChampionGrapList;
