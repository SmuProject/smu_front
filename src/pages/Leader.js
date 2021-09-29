import { React, useState, useEffect } from "react";
import validator from "validator";
import CreateUser2 from "./CreateUser2";
import "./leader.css";
import UserList from "./UserList";
import styled from "styled-components";
import axios from "axios";

const Modal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 10px;
`;

const CloseModal = styled.button`
  margin: 30px;
  width: 50px;
  height: 40px;
  background-color: skyblue;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: #008cba;
  color: white;
`;

function Leader() {
  const [isShowing, setisShowing] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const rep = await axios.get(
        "https://blog.galbimandudev.com/summoner/leader"
      );
      setUsers(rep.data);
    };
    fetchUsers();
  }, [isShowing]);

  const [inputCode, setInputCode] = useState({
    email: "",
    typeCode: "",
    summonerName: "",
  });
  const [alarm, setAlarm] = useState({
    allowCode: "",
    code: 0,
    text: "",
  });
  const [error, setError] = useState({
    emailError: "",
    allowCodeError: "",
    summonerError: "",
  });

  const [inputs, setInputs] = useState({
    username: "",
  });
  const { username } = inputs;

  const openModal = () => {
    setisShowing(true);
  };

  const closeModal = () => {
    // console.log("11");
    setisShowing(false);
    setInputCode({
      email: "",
      typeCode: "",
      summonerName: "",
    });
    setAlarm({
      code: 0,
      text: "",
    });
    setError({
      emailError: "",
      allowCodeError: "",
      summonerError: "",
    });
  };

  const onChangeInputs = (e) => {
    setInputCode({ ...inputCode, [e.target.id]: e.target.value });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const sendEmail = async () => {
    if (inputCode.email === "") {
      setError({ ...error, emailError: "email을 입력해주세요" });
      return;
    }
    if (!validator.isEmail(inputCode.email)) {
      setError({ ...error, emailError: "email 양식을 지키지 않았습니다." });
      return;
    }

    const formdata = new FormData();
    formdata.append("address", inputCode.email);
    const rep = await axios.post(
      "https://blog.galbimandudev.com/email",
      formdata
    );
    const data = rep.data;
    // console.log(data);
    setAlarm({ ...alarm, allowCode: data });
    setError({ ...error, emailError: "이메일이 발송되었습니다." });
  };

  const onClickCode = () => {
    // console.log(alarm.allowCode);
    if (alarm.allowCode === "") {
      alert("이메일 인증부터 진행해주세요");
    } else {
      if (alarm.allowCode === inputCode.typeCode) {
        setAlarm({ ...alarm, code: 2, text: "인증되었습니다." });
      } else {
        if (inputCode.typeCode.length !== 0) {
          setAlarm({
            ...alarm,
            code: 1,
            text: "인증번호가 틀렸습니다.",
          });
        } else {
          setAlarm({
            ...alarm,
            code: 1,
            text: "인증번호를 입력해주세요",
          });
        }
      }
    }
  };
  const onCreate = async () => {
    // console.log(">>>", alarm.code);
    if (alarm.code === 0 || alarm.code === 1) {
      alert("이메일 인증부터 진행해주세요!");
      return;
    }
    const formdata = new FormData();
    formdata.append("name", inputCode.summonerName);
    try {
      const rep = await axios.post(
        "https://blog.galbimandudev.com/summoner/test",
        formdata
      );
      // console.log(rep.data);
      if (rep.data === false) {
        setError({ ...error, summonerError: "잘못된 소환사명입니다." });
        return;
      }
      // console.log(false);
      closeModal();
    } catch {
      setError({ ...error, summonerError: "잘못된 소환사명입니다." });
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}
      >
        <h1> 리더보드</h1>
      </div>

      {isShowing && (
        <div className="modal-wrapper">
          <Modal>
            <div className="modal-title">내 아이디 등록하기</div>
            <div>
              <p className="modalT">학교 이메일을 입력해주세요.</p>
              <input
                className="modalB"
                placeholder="학교이메일"
                type="email"
                id="email"
                onChange={onChangeInputs}
              />
              <button className="selectB" onClick={sendEmail}>
                인증
              </button>
              {error.emailError === "" ? (
                ""
              ) : (
                <p style={{ color: alarm.allowCode !== "" ? "green" : "red" }}>
                  {error.emailError}
                </p>
              )}
            </div>
            <div>
              <p className="modalT">인증번호를 입력해주세요.</p>
              <input
                className="modalB"
                placeholder="인증번호"
                id="typeCode"
                onChange={onChangeInputs}
              />
              <button className="selectB" onClick={onClickCode}>
                확인
              </button>
              {alarm.text === "" ? (
                ""
              ) : alarm.code === 2 ? (
                <p style={{ color: "green" }}>{alarm.text}</p>
              ) : (
                <p style={{ color: "red" }}>{alarm.text}</p>
              )}
            </div>

            <p className="modalT">소환사이름을 입력해주세요.</p>
            <CreateUser2
              username={inputCode.summonerName}
              onChange={onChangeInputs}
              onCreate={onCreate}
              code={alarm.code}
              error={error.summonerError}
            />

            <div>
              <CloseModal onClick={closeModal}>닫기</CloseModal>
            </div>
          </Modal>
        </div>
      )}
      <div
        style={{
          width: "100vw",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <button
            style={{
              width: "150px",
              height: "50px",
              borderRadius: "15px",
              backgroundColor: "cadetblue",
              float: "right",
              marginRight: "650px",
            }}
            type="submit"
            onClick={openModal}
          >
            내 아이디 등록하기
          </button>
        </div>

        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <table
            style={{
              width: "100vh",
              backgroundColor: "rgb(214, 255, 239)",
            }}
          >
            <tr>
              <th>순위</th>
              <th>아이디</th>
              <th>티어</th>
            </tr>
            <UserList users={users} />
          </table>
        </div>
      </div>
    </>
  );
}

export default Leader;
