import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_CHECK } from "../graphql/user.gql";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const navigate = useNavigate();
  // console.log('inputId',inputId)
  // console.log('inputPw',inputPw)
  const [login] = useMutation(USER_CHECK, {
    variables: { userInputId: inputId, userInputPw: inputPw },
  });

  async function UserCheck() {
    const loginRun = await login();

    setInputId("");
    setInputPw("");
    if (loginRun.data.userCheck === true) {
      alert("로그인 성공!");
      navigate("/board");
    } else {
      alert("아이디 또는 비밀번호를 확인하세요");
    }
  }

  return (
    <div className="login">
      <h1>로그인</h1>
      <div>ID</div>
      <input
        type="id"
        placeholder="아이디를 입력하세요"
        maxLength={20}
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <div>Password</div>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        maxLength={4}
        value={inputPw}
        onChange={(e) => setInputPw(e.target.value)}
      />
      <button onClick={UserCheck}>LOGIN</button>
    </div>
  );
};

export default Login;
