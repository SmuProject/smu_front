import React, { useEffect } from "react";

function CreateUser2({ username, onChange, onCreate, code, error }) {
  useEffect(() => {
    console.log("error>", error);
  }, []);
  return (
    <div>
      <input
        id="summonerName"
        placeholder="소환사 이름을 입력해주세요"
        onChange={onChange}
        value={username}
        className="modalB"
      />

      <button className="selectB" onClick={onCreate}>
        등록
      </button>
      {error === "" ? "" : <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default CreateUser2;
