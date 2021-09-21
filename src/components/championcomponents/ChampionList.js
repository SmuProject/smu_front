import React, { useState, useCallback, useEffect } from "react";
import ChampionElement from "./ChampionElement";

const ChampionList = ({ chamipons, championName, onClick }) => {
  const [championList, setChampionList] = useState([]);

  useEffect(() => {
    let rows = [];
    let cols = [];
    if (championName === "") {
      for (let i = 0; i < chamipons.length; i++) {
        cols.push(
          <td key={chamipons[i].championId} id={chamipons[i].championId}>
            <ChampionElement
              imageUrl={chamipons[i].imageLink}
              name={chamipons[i].championName}
              id={chamipons[i].championId}
              onClick={onClick}
            />
          </td>
        );
        if (cols.length === 5) {
          rows.push(
            <tr key={i} id={i}>
              {cols}
            </tr>
          );
          cols = [];
        }
      }
    } else {
      for (let i = 0; i < chamipons.length; i++) {
        if (chamipons[i].championName.includes(championName)) {
          cols.push(
            <td key={chamipons[i].championId} id={chamipons[i].championId}>
              <ChampionElement
                imageUrl={chamipons[i].imageLink}
                name={chamipons[i].championName}
                id={chamipons[i].championId}
                onClick={onClick}
              />
            </td>
          );
          if (cols.length === 5) {
            rows.push(
              <tr key={i} id={i}>
                {cols}
              </tr>
            );
            cols = [];
          }
        }
      }
    }
    if (rows.length === 0) {
      rows.push(<tr>{cols}</tr>);
    }

    setChampionList(rows);
  }, [chamipons, championName]);

  return (
    <div>
      <table>
        <tbody>{championList}</tbody>
      </table>
    </div>
  );
};

export default ChampionList;
