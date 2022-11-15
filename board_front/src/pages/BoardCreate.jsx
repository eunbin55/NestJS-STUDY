import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { BOARD_ADD } from "../graphql/board.gql";
import { USER_ONE } from "../graphql/user.gql";

export const BoardCreate = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const navigate = useNavigate();
  const now = new Date();
  const loginUserId = sessionStorage.getItem("inputId");

  const { loading, error, data } = useQuery(USER_ONE, {
    variables: {
      userId: loginUserId,
    },
  });
  console.log(data);
  const [add] = useMutation(BOARD_ADD, {
    variables: {
      title: inputTitle,
      contents: inputContents,
      userNum: data?.userOne.userNum,
    },
  });

  useEffect(() => {
    if (!loading && !error) {
      console.log(data.userOne.userNum);
    }
  }, [data, error, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const BoardAdd = async () => {
    if (!inputTitle || !inputContents) {
      alert("제목, 내용은 필수 입력 항목입니다.");
    } else {
      const addRun = await add();
      console.log(addRun);
      alert("등록되었습니다.");
      navigate("/board");
      window.location.reload();
    }
  };

  return (
    <div className="boardCreate">
      <h1>게시글 등록</h1>
      <div className="createData">
        <div>제목 :</div>
        <input
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <div>작성자 :</div>
        <div>{data.userOne.userName}</div>
        <div>부서명 :</div>
        <div>{data.userOne.department.deptName}</div>
        <div>작성일 :</div>
        <div>{now.toLocaleDateString("ko-kr")}</div>
        <div>내용 :</div>
        <textarea
          rows="10"
          value={inputContents}
          onChange={(e) => setInputContents(e.target.value)}
        />
      </div>
      <button onClick={BoardAdd}>등록</button>
    </div>
  );
};
