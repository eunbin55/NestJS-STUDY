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
  const [queryUserNum, setQueryUserNum] = useState("");
  // const [u001, setU001] = useState(data.userOne.userNum);
  const navigate = useNavigate();
  const now = new Date();
  const loginUserId = sessionStorage.getItem("inputId"); //login 한 userId

  const { loading, error, data } = useQuery(USER_ONE, {
    variables: {
      userId: loginUserId,
    },
    onCompleted: (data) => {
      // add.setQueryUserNum(BOARD_ADD, { userNum: data.userOne.userNum });
    },
  });
  useEffect(() => {
    if (!loading && !error) {
      console.log(data.userOne.userNum);
    }
  }, [data, error, loading]);

  const [add] = useMutation(BOARD_ADD, {
    variables: {
      title: inputTitle,
      contents: inputContents,
      userNum: "U000001",
    },
  });

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

  if (loading) return <Loading />;
  if (error) return <Error />;
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
        <div>{data.userOne.userName}</div>
        <div>부서명</div>
        <div>{data.userOne.deptCode}</div>
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
