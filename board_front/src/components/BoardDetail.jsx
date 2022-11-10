import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_DELETE, BOARD_ONE } from "../graphql/board.gql";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const BoardDetail = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) }, // boardNum을 int로 형변환
  });
  const [boardDelete] = useMutation(BOARD_DELETE, {
    variables: { boardSetNum: parseInt(boardNum) },
  });

  const DeleteRun = async () => {
    await boardDelete();
    alert("삭제되었습니다.");
    navigate("/board");
    window.location.reload();
  };

  useEffect(() => {
    if (!loading) {
      console.log(data.boardOne);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const formatDate = new Date(data.boardOne.date);
  return (
    <div className="boardDetail">
      <h1>게시글 상세</h1>
      <div className="boardOneData">
        <div>제목</div>
        <p>{data.boardOne.title} </p>
        <div>작성자</div>
        <p>{data.boardOne.userNum} </p>
        <div>작성일</div>
        <p>{formatDate.toLocaleString()} </p>
        <div>내용</div>
        <p>{data.boardOne.contents} </p>
      </div>
      <button>수정</button>
      <button onClick={DeleteRun}>삭제</button>
    </div>
  );
};
