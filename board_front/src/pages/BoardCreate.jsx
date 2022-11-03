import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { BOARD_ADD } from "../graphql/board.gql";

export const BoardCreate = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const [inputUserNum, setInputUserNum] = useState("");

  console.log(inputTitle);
  const [add] = useMutation(BOARD_ADD, {
    variables: {
      title: inputTitle,
      contents: inputContents,
      userNum: inputUserNum,
    },
  });
  const BoardAdd = async () => {
    const a = await add();
    console.log(a);
    console.log("inputTitle======", inputTitle);
  };

  return (
    <>
      <h1>게시글 등록</h1>
      <div className="detailMain">
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
        <div>2022-11-04</div>
        <div>내용</div>
        <input
          value={inputContents}
          onChange={(e) => setInputContents(e.target.value)}
        />
        {/* <div>첨부파일</div>
        <div></div> */}
      </div>
      <button onClick={BoardAdd}>등록</button>
    </>
  );
};
