import React from "react";
import CreateUser2 from "../pages/CreateUser2";

export default function Modal(username, onChange, onCreate, closeModal) {
  return (
    <div className="modal-wrapper">
      <div style={{ background: "skyblue" }}>
        <div className="modal-title">내 아이디 등록하기</div>
        <p className="modalT">학교 이메일을 입력해주세요.</p>
        <input className="modalB" placeholder="학교이메일"></input>
        <button className="selectB">인증</button>
        <p className="modalT">인증번호를 입력해주세요.</p>
        <input className="modalB" placeholder="인증번호"></input>
        <button className="selectB">확인</button>
        <p className="modalT">소환사이름을 입력해주세요.</p>
        <CreateUser2
          username={username}
          onChange={onChange}
          onCreate={onCreate}
        />

        <div className="close-wraper">
          <button id="close" onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
