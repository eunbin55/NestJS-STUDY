import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BOARD_ONE } from "../graphql/board.gql";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const BoardDetail = () => {
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: 7 }, //테스트로 boardSetNum 지정
  });

  useEffect(() => {
    if (!loading) {
      console.log(data.boardOne);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <h1>게시글 상세</h1>
      <div>
        <div>제목:{data.boardOne.title} </div>
        <div>작성자:{data.boardOne.userNum} </div>
        <div>작성일:{data.boardOne.date} </div>
        <div>내용:{data.boardOne.contents} </div>
      </div>
    </>
  );
};
