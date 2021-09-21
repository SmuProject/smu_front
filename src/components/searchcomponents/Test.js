import React, { useState, useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import ChampionRate from "../Graphs/ChampionRate";
import axios from "axios";
import { Line } from "react-chartjs-2";

function Test({ id }) {
  const [rate, setRateData] = useState([]);

  useEffect(() => {
    console.log("champion ID >>>> ", id);

    const getData = async (id) => {
      try {
        const rep = await axios.get(
          "https://blog.galbimandu.dev/champion/rate/" + id
        );
        console.log(rep.data);
        const chmpion1 =
          rep.data.championRank1 !== null
            ? rep.data.championRank1.winrate * 100
            : 0;
        const chmpion2 =
          rep.data.championRank2 !== null
            ? rep.data.championRank2.winrate * 100
            : 0;
        const chmpion3 =
          rep.data.championRank3 !== null
            ? rep.data.championRank3.winrate * 100
            : 0;
        const chmpion4 =
          rep.data.championRank4 !== null
            ? rep.data.championRank4.winrate * 100
            : 0;

        const ratedata = [chmpion1, chmpion2, chmpion3, chmpion4];
        setRateData(ratedata);
      } catch (error) {
        console.log(error);
      }
    };
    getData(id);
  }, [id]);

  return (
    <div>
      <Line
        width="450"
        height="200"
        data={{
          labels: ["10-20", "20-30", "30-40", "40-"],
          datasets: [
            {
              label: "Rate graph",
              data: rate,
              fill: false,
              borderColor: "cornflowerblue",
            },
          ],
        }}
      />
    </div>
  );
}

export default Test;
