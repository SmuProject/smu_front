import { React, useState, useCallback } from "react";
import Openbutton from "./opencomponenets/Openbutton";
import ChampionRate from "../championcomponents/ChampionRate";

function Openedhied() {
  const [clicked, setClicked] = useState(true);

  const onClick = useCallback(() => {
    console.log(clicked);
    setClicked(() => !clicked);
  }, [clicked]);

  return (
    <div>
      <Openbutton onClick={onClick} clicked={clicked} />

      {clicked && <ChampionRate />}
    </div>
  );
}

export default Openedhied;
