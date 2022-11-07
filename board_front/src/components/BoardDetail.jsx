import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BOARD_ONE } from "../graphql/board.gql";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const BoardDetail = () => {
  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) }, // boardNum을 int로 형변환
  });

  useEffect(() => {
    if (!loading) {
      console.log(data.boardOne);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="boardDetail">
      <h1>게시글 상세</h1>
      <div className="boardOneData">
        <div>제목</div>
        <p>{data.boardOne.title} </p>
        <div>작성자</div>
        <p>{data.boardOne.userNum} </p>
        <div>작성일</div>
        <p>{data.boardOne.date} </p>
        <div>내용</div>
        <p>{data.boardOne.contents} </p>
      </div>
    </div>
  );
};
