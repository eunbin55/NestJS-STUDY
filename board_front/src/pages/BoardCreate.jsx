import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BOARD_ADD } from "../graphql/board.gql";

export const BoardCreate = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const [inputUserNum, setInputUserNum] = useState("");
  const navigate = useNavigate();
  const now = new Date();

  const [add] = useMutation(BOARD_ADD, {
    variables: {
      title: inputTitle,
      contents: inputContents,
      userNum: inputUserNum,
    },
  });
  const BoardAdd = async () => {
    if (!inputTitle || !inputContents || !inputUserNum) {
      alert("제목, 작성자, 내용은 필수 입력 항목입니다.");
    } else {
      const addRun = await add();
      console.log(addRun);
      alert("등록되었습니다.");
      navigate("/board");
    }
  };

  return (
    <div className="boardCreate">
      <h1>게시글 등록</h1>
      <div className="createData">
        <div>제목</div>
        <input
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <div>작성자</div>
        <input
          value={inputUserNum}
          onChange={(e) => setInputUserNum(e.target.value)}
        />
        <div>부서명</div>
        <input />
        <div>작성일</div>
        <div>{now.toLocaleDateString("ko-kr")}</div>
        <div>내용</div>
        <textarea
          rows="10"
          value={inputContents}
          onChange={(e) => setInputContents(e.target.value)}
        />
        {/* <div>첨부파일</div>
        <div></div> */}
      </div>
      <button onClick={BoardAdd}>등록</button>
    </div>
  );
};
