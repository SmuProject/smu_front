import React, { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
export default function ChampionRate({ rate, id }) {
  const [data, setdata] = useState({
    labels: ["10-20", "20-30", "30-40", "40-"],
    datasets: [],
  });

  // const graph = useMemo(() => {
  //   const graphhList = [];
  //   graphhList.push(<Line width="450" height="200" data={data} />);
  //   return graphhList;
  // }, rate);

  const [graphData, setGraphData] = useState({
    label: "Tier graph",
    data: [],
    fill: false,
    borderColor: "cornflowerblue",
  });
  useEffect(() => {
    // console.log("111 ? >>", rate);
    // console.log("id >> ", id);
    // setGraphData({ ...graphData, data: rate });
    // setdata({ ...data, datasets: [graphData] });
    // console.log("render");
  }, [rate, id]);

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
